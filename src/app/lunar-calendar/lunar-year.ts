// Lunar Year conversion class
export class LunarYear {
  day: number;
  month: number;
  year: number;
  
  // Lunar zodiac animals
  private zodiacAnimals = [
    'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ',
    'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'
  ];

  // Lunar zodiac stems
  private heavenlyStemsCN = [
    'Canh', 'Tân', 'Nhâm', 'Quỷ', 'Giáp',
    'Ất', 'Bính', 'Đinh', 'Mậu', 'Kỷ'
  ];

  // Lunar zodiac branches
  private earthlyBranchsCN = [
    'Tý', 'Sửu', 'Dần', 'Mão', 'Thìn', 'Tỵ',
    'Ngọ', 'Mùi', 'Thân', 'Dậu', 'Tuất', 'Hợi'
  ];

  constructor(day: number, month: number, year: number) {
    this.day = day;
    this.month = month;
    this.year = year;
  }

  /**
   * Algorithm to convert calendar date to lunar date
   * This is a simplified version based on the Zeller's algorithm and lunar conversion
   */
  findLunarYearDetail() {
    const jd = this.calculateJulianDay(this.day, this.month, this.year);
    const lunarDate = this.convertToLunarDate(jd);
    
    const dayOfWeek = this.getDayOfWeek(this.day, this.month, this.year);
    const yearStem = this.getYearStem(lunarDate.year);
    const yearBranch = this.getYearBranch(lunarDate.year);
    const monthStem = this.getMonthStem(lunarDate.month, lunarDate.year);
    const monthBranch = this.getMonthBranch(lunarDate.month);
    const dayStem = this.getDayStem(jd);
    const dayBranch = this.getDayBranch(jd);

    return {
      solarDate: `${this.day}/${this.month}/${this.year}`,
      lunarDate: `${lunarDate.day}/${lunarDate.month}/${lunarDate.year}`,
      dayOfWeek: dayOfWeek,
      yearCN: yearStem + ' ' + yearBranch,
      monthCN: monthStem + ' ' + monthBranch,
      dayCN: dayStem + ' ' + dayBranch,
      zodiac: yearBranch
    };
  }

  /**
   * Calculate Julian Day Number
   */
  private calculateJulianDay(day: number, month: number, year: number): number {
    let a = Math.floor((14 - month) / 12);
    let y = year + 4800 - a;
    let m = month + 12 * a - 3;
    
    let jd = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;
    return jd;
  }

  /**
   * Convert Julian Day to Lunar Date
   */
  private convertToLunarDate(jd: number) {
    let k = Math.floor((jd - 2451550.1) / 29.530588861);
    let mexp = this.calculateNewMoonJD(k);
    
    if (mexp > jd) {
      k = k - 1;
      mexp = this.calculateNewMoonJD(k);
    }
    
    k = k + 1;
    let mexp2 = this.calculateNewMoonJD(k);
    
    let lunarMonth = (mexp2 < jd) ? Math.floor((jd - mexp) / 29.5) + 1 : 1;
    let lunarDay = Math.floor(jd - this.calculateNewMoonJD(k - 1) + 1);
    
    let y = Math.floor((k + 20) / 12.3685);
    
    return {
      day: lunarDay,
      month: lunarMonth,
      year: y
    };
  }

  /**
   * Calculate New Moon JD
   */
  private calculateNewMoonJD(k: number): number {
    const T = k / 1236.85;
    const JE = 2451550.09766 + 29.530588861 * k + 
               0.00015437 * T * T - 0.000000150 * T * T * T + 
               0.00000011 * T * T * T * T;
    return JE;
  }

  /**
   * Get day of week (Vietnamese: Thứ)
   */
  private getDayOfWeek(day: number, month: number, year: number): string {
    const daysOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
    const a = Math.floor((14 - month) / 12);
    const y = year - a;
    const m = month + 12 * a - 2;
    const dow = (day + y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) + Math.floor((31 * m) / 12)) % 7;
    return daysOfWeek[dow];
  }

  /**
   * Get Heavenly Stem for year
   */
  private getYearStem(year: number): string {
    return this.heavenlyStemsCN[year % 10];
  }

  /**
   * Get Earthly Branch for year (Zodiac animal)
   */
  private getYearBranch(year: number): string {
    return this.earthlyBranchsCN[year % 12];
  }

  /**
   * Get Heavenly Stem for month
   */
  private getMonthStem(month: number, year: number): string {
    const yearStem = year % 10;
    const stemIndex = (yearStem * 2 + (month - 1)) % 10;
    return this.heavenlyStemsCN[stemIndex];
  }

  /**
   * Get Earthly Branch for month
   */
  private getMonthBranch(month: number): string {
    return this.earthlyBranchsCN[(month - 1 + 2) % 12];
  }

  /**
   * Get Heavenly Stem for day
   */
  private getDayStem(jd: number): string {
    return this.heavenlyStemsCN[Math.floor(jd + 9) % 10];
  }

  /**
   * Get Earthly Branch for day
   */
  private getDayBranch(jd: number): string {
    return this.earthlyBranchsCN[Math.floor(jd + 9) % 12];
  }
}
