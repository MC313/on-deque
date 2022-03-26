export const toUtcTime = (timeValue: number, timeUnit: TimeUnit) => {
  if (!timeValue) return undefined;
  if (timeUnit === "calendar") return timeValue;
  return Date.now() + _unitToMilliseconds(timeValue, timeUnit);
};

export const dateToUTCMilliseconds = (date: Date): number =>
  date &&
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date?.getUTCDate());

export const formatDate = (date: Date | undefined) => {
  if (!date) return;
  const { year, dayOfMonth } = _parseDate(date);
  const monthString = date.toLocaleString("default", {
    month: "long",
  });
  return `${dayOfMonth} ${monthString} ${year}`;
};

const _parseDate = (date: Date) => ({
  year: date.getUTCFullYear(),
  month: date.getUTCMonth(),
  dayOfMonth: date.getUTCDate(),
});

const _unitToMilliseconds = (timeValue: number, timeUnit: TimeUnit) =>
  timeValue * _getMillisecByUnit[timeUnit];

const _getMillisecByUnit: GetMillisecByUnit = {
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

export type TimeUnit = keyof GetMillisecByUnit & "calendar";
