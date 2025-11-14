import { CalendarDatesTS } from "../../types/calendar";

export default function CalendarDates({
  daysGap,
  daysInMonth,
  currentDate,
}: CalendarDatesTS) {
  return (
    <div className="w-full grid grid-cols-7 gap-3 justify-items-end">
      {new Array(daysGap).fill(null).map((_, i: number) => (
        <span key={`empty${i}`}></span>
      ))}

      {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
        const isSelected = day === currentDate;
        return (
          <div
            key={day}
            className={`w-full m-auto text-right ${
              isSelected ? "bg-black text-white" : ""
            }`}
          >
            {day}
          </div>
        );
      })}
    </div>
  );
}
