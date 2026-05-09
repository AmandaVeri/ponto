export type TimeClockType = 'entry' | 'lunch_out' | 'lunch_return' | 'exit';

export type TimeClockSummary = {
  lastMark: string;
  workedHoursToday: string;
};
