import { clsx, type ClassValue } from "clsx"
import { format, formatDistance } from "date-fns";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatJobApplicationDate = (dateString: string) => {
  const date = new Date(dateString);
  return {
    fullDate: format(date, 'MMM dd, yyyy'),
    relativeTime: formatDistance(date, new Date(), { addSuffix: true })
  };
};