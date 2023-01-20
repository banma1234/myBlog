import { parseISO, format } from "date-fns";
import { UseDateType } from "./useDateType";

export default function Date({ dateString }: UseDateType) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL d, yyyy")}</time>;
}
