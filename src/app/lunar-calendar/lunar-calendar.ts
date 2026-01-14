import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LunarYear } from './lunar-year';

@Component({
  selector: 'app-lunar-calendar',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './lunar-calendar.html',
  styleUrls: ['./lunar-calendar.css']
})
export class LunarCalendar {
  // Array of days (1-31)
  days: string[] = this.generateArray(1, 31);
  
  // Array of months (1-12)
  months: string[] = this.generateArray(1, 12);
  
  // Array of years (1900-2100)
  years: string[] = this.generateArray(1900, 2100);

  // Selected values
  selectedDay: string = '1';
  selectedMonth: string = '1';
  selectedYear: string = new Date().getFullYear().toString();

  // Result data
  result: any = null;
  hasConverted: boolean = false;

  constructor() {}

  /**
   * Generate array of numbers as strings
   */
  generateArray(start: number, end: number): string[] {
    const array: string[] = [];
    for (let i = start; i <= end; i++) {
      array.push(i.toString());
    }
    return array;
  }

  /**
   * Convert calendar to lunar year
   */
  convertToLunar() {
    const day = parseInt(this.selectedDay, 10);
    const month = parseInt(this.selectedMonth, 10);
    const year = parseInt(this.selectedYear, 10);

    try {
      const lunarYear = new LunarYear(day, month, year);
      this.result = lunarYear.findLunarYearDetail();
      this.hasConverted = true;
    } catch (error) {
      console.error('Error converting to lunar year:', error);
      this.result = null;
      this.hasConverted = false;
    }
  }
}
