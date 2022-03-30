export const toUtcTime = (timeValue: number, timeUnit: TimeUnit) => {
  if (!timeValue) return undefined;
  return Date.now() + unitToMilliseconds(timeValue, timeUnit);
};

export const dateToUTCMilliseconds = (date: Date): number =>
  date &&
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date?.getUTCDate());

export const millisecondsToDate = (milliseconds: string | undefined) => {
  if (!milliseconds) return;
  const date = new Date(+milliseconds);
  return toReadableDate(date);
};

export const formatDate = (date: Date | undefined) => {
  if (!date) return;
  return toReadableDate(date);
};

export const unitToMilliseconds = (timeValue: number, timeUnit: TimeUnit) =>
  timeValue * getMillisecByUnit[timeUnit];

export const toReadableDate = (date: Date) => {
  const { day, month, year } = parseDate(date);
  return `${month} - ${day} - ${year}`;
};
const parseDate = (date: Date) => ({
  year: date.getUTCFullYear(),
  month: date.toLocaleString("en-US", { month: "long" }),
  day: date.getUTCDate(),
});

const getMillisecByUnit: GetMillisecByUnit = {
  minute: 60000,
  minutes: 60000,
  hour: 60000 * 60,
  hours: 60000 * 60,
  day: 60000 * 60 * 24,
  days: 60000 * 60 * 24,
};

interface GetMillisecByUnit {
  minute: number;
  minutes: number;
  hour: number;
  hours: number;
  day: number;
  days: number;
}

export type TimeUnit = keyof GetMillisecByUnit;
