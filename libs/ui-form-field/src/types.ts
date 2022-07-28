const reminderUnits = [
  "minute",
  "minutes",
  "hour",
  "hours",
  "day",
  "days",
] as const;

export type ReminderUnit = typeof reminderUnits[number];

export const REMINDER_UNITS: ReminderUnit[] = [
  "minute",
  "minutes",
  "hour",
  "hours",
  "day",
  "days",
];
