import { twMerge } from 'tailwind-merge';
import { clsx, type ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getCleanIconBody(svgBody: string) {
  return svgBody
    .replace(/stroke-width="[^"]*"/g, '')
    .replace(/fill="[^"]*"/g, '')
}
