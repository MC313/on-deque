const reminderUnits = [
  "minute",
  "minutes",
  "hour",
  "hours",
  "day",
  "days",
] as const;

export interface FormData {
  url: string;
  tags?: string;
  reminderUnit: ReminderUnit;
  reminderValue: number;
  datePickerValue?: string;
  description?: string;
}

export type ReminderUnit = typeof reminderUnits[number];

export const REMINDER_UNITS: ReminderUnit[] = [
  "minute",
  "minutes",
  "hour",
  "hours",
  "day",
  "days",
];
