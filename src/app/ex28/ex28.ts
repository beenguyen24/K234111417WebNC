import { Component, OnDestroy, OnInit } from '@angular/core';

interface BpiCurrency {
  code: string;
  symbol: string;
  rate: string;
  description: string;
  rate_float: number;
}

interface BpiResponse {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: Record<string, BpiCurrency>;
}

@Component({
  selector: 'app-ex28',
  standalone: false,
  templateUrl: './ex28.html',
  styleUrls: ['./ex28.css'],
})
export class Ex28 implements OnInit, OnDestroy {
  private readonly apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';
  private refreshTimer?: number;

  bpiData?: BpiResponse;
  currencyList: BpiCurrency[] = [];
  lastUpdatedRaw = '';
  lastUpdatedIso = '';
  loading = false;
  errorMessage = '';
  refreshSeconds = 30;

  ngOnInit(): void {
    this.fetchBpi();
    this.refreshTimer = window.setInterval(() => {
      this.fetchBpi();
    }, this.refreshSeconds * 1000);
  }

  ngOnDestroy(): void {
    if (this.refreshTimer !== undefined) {
      window.clearInterval(this.refreshTimer);
    }
  }

  async fetchBpi(): Promise<void> {
    this.loading = true;
    this.errorMessage = '';

    try {
      const response = await fetch(this.apiUrl, { cache: 'no-store' });
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }

      const data = (await response.json()) as BpiResponse;
      this.bpiData = data;
      this.lastUpdatedRaw = data.time.updated;
      this.lastUpdatedIso = data.time.updatedISO;
      this.currencyList = this.buildCurrencyList(data);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : String(error);
      this.errorMessage = `Failed to load BPI data: ${message}`;
    } finally {
      this.loading = false;
    }
  }

  symbolHtml(code: string): string {
    const map: Record<string, string> = {
      USD: '&#36;',
      GBP: '&pound;',
      EUR: '&euro;',
    };

    return map[code] ?? '';
  }

  trackByCode(index: number, item: BpiCurrency): string {
    return item.code;
  }

  private buildCurrencyList(data: BpiResponse): BpiCurrency[] {
    const order = ['USD', 'GBP', 'EUR'];
    const list: BpiCurrency[] = [];

    for (const code of order) {
      const item = data.bpi[code];
      if (item) {
        list.push(item);
      }
    }

    for (const code of Object.keys(data.bpi)) {
      if (!order.includes(code)) {
        list.push(data.bpi[code]);
      }
    }

    return list;
  }
}
