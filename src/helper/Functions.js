import { format, parseISO, isValid } from "date-fns";

export function DateFormatting(date) {
	return isValid(date) ? format(parseISO(date), "mm/dd/yyyy") : date;
}

export function capitalizeFirstLetter(data) {
	return data.charAt(0).toUpperCase() + data.slice(1);
}
