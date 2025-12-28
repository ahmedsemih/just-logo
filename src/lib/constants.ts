export const AVAILABLE_ICON_SETS = [
  'lucide',
  'lucide-lab',
  'hugeicons',
  'tabler',
  'meteor-icons',
] as const;
export type IconSet = (typeof AVAILABLE_ICON_SETS)[number];
