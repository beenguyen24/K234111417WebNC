# Lunar Calendar Converter Component

## Overview
This component converts calendar (solar/Gregorian) dates to lunar calendar dates with detailed information including day of week, heavenly stems (Thiên Can), earthly branches (Địa Chi), and zodiac animals.

## Features
- **Date Selection**: Users can select day (1-31), month (1-12), and year (1900-2100) from dropdown lists
- **Data Binding**: Uses Angular two-way binding with `[(ngModel)]` to bind form values
- **Lunar Conversion**: Implements astronomical algorithm to accurately convert solar dates to lunar dates
- **Detailed Information**:
  - Solar date
  - Lunar date
  - Day of week (Vietnamese)
  - Year with heavenly stem and earthly branch
  - Month with heavenly stem and earthly branch
  - Day with heavenly stem and earthly branch
  - Zodiac animal

## File Structure
```
lunar-calendar/
├── lunar-calendar.ts          # Component class with logic
├── lunar-calendar.html        # Component template
├── lunar-calendar.css         # Component styles
├── lunar-calendar.spec.ts     # Unit tests
└── lunar-year.ts              # LunarYear class with conversion algorithm
```

## Key Classes

### LunarYear Class
**Parameters**:
- `day`: number (1-31)
- `month`: number (1-12)
- `year`: number

**Methods**:
- `findLunarYearDetail()`: Returns an object with detailed lunar information

**Algorithm**:
The conversion uses the Julian Day Number (JD) calculation based on astronomical observations:
1. Convert solar date to Julian Day Number
2. Calculate new moon occurrences
3. Determine lunar month and day based on new moon positions
4. Calculate heavenly stems and earthly branches based on lunar cycle

### LunarCalendar Component
**Properties**:
- `days`: Array of day values (1-31)
- `months`: Array of month values (1-12)
- `years`: Array of year values (1900-2100)
- `selectedDay`, `selectedMonth`, `selectedYear`: Currently selected values
- `result`: Conversion result object
- `hasConverted`: Boolean flag indicating if conversion has been performed

**Methods**:
- `generateArray(start: number, end: number)`: Generates array of string values
- `convertToLunar()`: Performs the conversion and updates result

## Data Binding Example
```html
<select class="form-select" id="day" [(ngModel)]="selectedDay" name="day">
  <option *ngFor="let day of days">{{ day }}</option>
</select>
```

The `[(ngModel)]="selectedDay"` creates two-way binding:
- Property binding: `[ngModel]="selectedDay"` - updates the input when component data changes
- Event binding: `(ngModelChange)="selectedDay = $event"` - updates component data when user changes input

## Chinese Zodiac (Con Giáp)
The component calculates which zodiac animal corresponds to the lunar year:
- Tý (Rat), Sửu (Ox), Dần (Tiger), Mão (Rabbit), Thìn (Dragon), Tỵ (Snake)
- Ngọ (Horse), Mùi (Goat), Thân (Monkey), Dậu (Rooster), Tuất (Dog), Hợi (Pig)

## Heavenly Stems (Thiên Can)
10 stems representing natural elements and yin/yang:
Canh, Tân, Nhâm, Quỷ, Giáp, Ất, Bính, Đinh, Mậu, Kỷ

## Earthly Branches (Địa Chi)
12 branches corresponding to zodiac animals and lunar months:
Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi

## Usage
To use this component in your application:

1. **Add to Module** (already done in app-module.ts):
```typescript
import { LunarCalendar } from './lunar-calendar/lunar-calendar';

@NgModule({
  declarations: [LunarCalendar, ...]
})
export class AppModule { }
```

2. **Add Route** (already done in app-routing-module.ts):
```typescript
const routes: Routes = [
  { path: 'lunar-calendar', component: LunarCalendar }
];
```

3. **Navigate to Component**:
Access via `http://localhost:4200/lunar-calendar`

Or use component selector directly:
```html
<app-lunar-calendar></app-lunar-calendar>
```

## Testing
Unit tests are provided in `lunar-calendar.spec.ts`:
- Component creation test
- Array generation tests
- Conversion functionality test
- LunarYear class instantiation test

Run tests with: `ng test`

## Browser Compatibility
- Chrome
- Firefox
- Safari
- Edge

## Dependencies
- Angular (FormsModule for ngModel)
- Bootstrap CSS (for styling)

## Notes
- The lunar calendar algorithm is based on astronomical calculations of new moon positions
- Vietnamese day names are used (Thứ hai, Thứ ba, etc.)
- Years range from 1900 to 2100 for practical purposes
- All calculations use the Julian Day Number system for accuracy
