import { format, parseISO } from "date-fns";

export default function DateFormatting(date) {
	return format(parseISO(date));
}
