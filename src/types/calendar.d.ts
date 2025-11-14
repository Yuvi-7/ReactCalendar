declare type CalendarHeaderTS = {
  year: number;
  month: number;
};

declare type CalendarDatesTS = {
  daysGap: number;
  daysInMonth: number;
  currentDate: number;
};

declare type DateTS = { date: string | Date };
export { CalendarHeaderTS, CalendarDatesTS, DateTS };
