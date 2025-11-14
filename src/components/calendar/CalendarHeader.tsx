import { months } from "../../constants/calendar";
import { CalendarHeaderTS } from "../../types/calendar";

export default function CalendarHeader({ year, month }: CalendarHeaderTS) {
  return <h1>{`${months[month]} ${year}`}</h1>;
}
