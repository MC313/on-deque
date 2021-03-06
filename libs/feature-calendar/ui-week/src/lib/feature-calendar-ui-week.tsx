import React from "react";

import { DateObj, GetDatePropsOptions } from "dayzed";

import { CalendarDay } from "@on-deque/feature-calendar/ui-day";
import { dateToUTCMilliseconds } from "@on-deque/shared/util-format-date";
import { colors } from "@styles";

export const CalendarWeek = ({ datePropsFn, week }: CalendarWeekProps) => {
  return (
    <React.Fragment>
      {week.map((dateObj: string | DateObj, index: number) => {
        if (!dateObj || typeof dateObj === "string") return;
        const { date, selected, today } = dateObj;
        const background = selected ? colors.primary : "transparent";
        const dateValue = date?.getDate();

        return (
          <CalendarDay
            key={index}
            background={background}
            dayData={datePropsFn({ dateObj })}
            today={today}
            value={dateValue}
            pastDate={isPastDate(date)}
          />
        );
      })}
    </React.Fragment>
  );
};

const isPastDate = (_date: Date) => {
  const dateMillisecs = dateToUTCMilliseconds(_date);
  const todayMillisecs = dateToUTCMilliseconds(new Date());
  return dateMillisecs < todayMillisecs;
};

/* eslint-disable-next-line */
export interface CalendarWeekProps {
  datePropsFn: (data: GetDatePropsOptions) => any;
  week: ("" | DateObj)[];
}
