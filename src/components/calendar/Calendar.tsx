import { DateTS } from "../../types/calendar";
import CalendarDates from "./CalendarDates";
import CalendarHeader from "./CalendarHeader";
import CalendarWeekDays from "./CalendarWeekDays";

function isAllowedFormat(date: string | Date) {
  if (typeof date === "string") {
    const parsed = new Date(date);

    if (isNaN(parsed.getTime())) {
      return null;
    }

    return parsed;
  } else {
    return date;
  }
}

export default function Calendar({ date }: DateTS) {
  let dateObj = isAllowedFormat(date);
  if (dateObj === null)
    return (
      <div className="text-red-500 text-center">
        Invalid date. Allowed formats: YYYY/MM/DD, DD/MM/YYYY, DD-MM-YYYY,
        YYYY-MM-DD
      </div>
    );

  const year = dateObj.getFullYear();
  const month = dateObj.getMonth();
  const currentDate = dateObj.getDate();

  // gaps before 1st date
  const daysGap = new Date(year, month, 1).getDay();

  // days in this month
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="flex flex-col justify-center items-center">
      <CalendarHeader year={year} month={month} />
      <CalendarWeekDays />
      <CalendarDates
        daysGap={daysGap}
        daysInMonth={daysInMonth}
        currentDate={currentDate}
      />
    </div>
  );
}
