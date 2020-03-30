/**
 * @Todo
 */
export default class Moment {
  private date: Date;
  private monthNames: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  private dayNames: string[] = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ];
  constructor(lang: string) {
    this.date = new Date();
  }
  getMonth(): string {
    return this.monthNames[this.date.getMonth()];
  }
  getYear(): number {
    return this.date.getFullYear();
  }
}
