import React from "react";

import { DateObj, GetDatePropsOptions } from "dayzed";

import { CalendarDay } from "@on-deque/feature-calendar/ui-day";
import { colors } from "@styles";

export const CalendarWeek = ({ datePropsFn, week }: CalendarWeekProps) => {
  return (
    <React.Fragment>
      {week.map((dateObj: string | DateObj, index: number) => {
        if (!dateObj || typeof dateObj === "string") return;
        const { date, selected, today } = dateObj;
        const background = today || selected ? colors.primary : "transparent";
        const dateValue = date?.getDate();

        return (
          <CalendarDay
            key={index}
            background={background}
            dayData={datePropsFn({ dateObj })}
            value={dateValue}
            pastDate={isPastDate(date)}
          />
        );
      })}
    </React.Fragment>
  );
};

const isPastDate = (_date: Date) => {
  const utcMillisecs = toUTCMilliseconds(_date);
  const todayMillisecs = toUTCMilliseconds(new Date());
  return utcMillisecs < todayMillisecs;
};

const toUTCMilliseconds = (date: Date): number =>
  date &&
  Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date?.getUTCDay());

/* eslint-disable-next-line */
export interface CalendarWeekProps {
  datePropsFn: (data: GetDatePropsOptions) => any;
  week: ("" | DateObj)[];
}
