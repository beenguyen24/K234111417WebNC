import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LunarCalendar } from './lunar-calendar';
import { LunarYear } from './lunar-year';

describe('LunarCalendar', () => {
  let component: LunarCalendar;
  let fixture: ComponentFixture<LunarCalendar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LunarCalendar ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LunarCalendar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have days array from 1 to 31', () => {
    expect(component.days.length).toBe(31);
    expect(component.days[0]).toBe('1');
    expect(component.days[30]).toBe('31');
  });

  it('should have months array from 1 to 12', () => {
    expect(component.months.length).toBe(12);
    expect(component.months[0]).toBe('1');
    expect(component.months[11]).toBe('12');
  });

  it('should have years array from 1900 to 2100', () => {
    expect(component.years.length).toBe(201);
    expect(component.years[0]).toBe('1900');
  });

  it('should convert calendar to lunar date', () => {
    component.selectedDay = '1';
    component.selectedMonth = '1';
    component.selectedYear = '2000';

    component.convertToLunar();

    expect(component.hasConverted).toBe(true);
    expect(component.result).toBeTruthy();
    expect(component.result.solarDate).toBe('1/1/2000');
  });
});

describe('LunarYear', () => {
  it('should create lunar year instance', () => {
    const lunar = new LunarYear(1, 1, 2000);
    expect(lunar.day).toBe(1);
    expect(lunar.month).toBe(1);
    expect(lunar.year).toBe(2000);
  });

  it('should return detailed lunar information', () => {
    const lunar = new LunarYear(1, 1, 2000);
    const result = lunar.findLunarYearDetail();

    expect(result).toBeTruthy();
    expect(result.solarDate).toBe('1/1/2000');
    expect(result.lunarDate).toBeTruthy();
    expect(result.dayOfWeek).toBeTruthy();
    expect(result.yearCN).toBeTruthy();
    expect(result.monthCN).toBeTruthy();
    expect(result.dayCN).toBeTruthy();
  });
});
