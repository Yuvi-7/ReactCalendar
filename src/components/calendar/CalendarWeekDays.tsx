import { weekDays } from "../../constants/calendar";

export default function CalendarWeekDays() {
  return (
    <div className="grid grid-cols-7 gap-3 justify-items-end text-sm">
      {weekDays.map((day) => (
        <div key={day}>{day}</div>
      ))}
    </div>
  );
}
