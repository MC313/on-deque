import styled from "@emotion/styled";
import { CalendarDay } from "@on-deque/feature-calendar/ui-day";
import { CalendarMonth } from "@on-deque/feature-calendar/ui-month";
import { CalendarMonthLabel } from "@on-deque/feature-calendar/ui-month-label";
import { CalendarWeek } from "@on-deque/feature-calendar/ui-week";
import { CalendarWeekdaysLabel } from "@on-deque/feature-calendar/ui-weekdays-label";
import Dayzed, {
  DateObj,
  RenderProps as DayzedRenderProps,
  useDayzed,
} from "dayzed";
import React from "react";

import {
  monthNamesShort,
  weekdayNamesShort,
} from "../../ui-month/calendar-constants";

export const Calendar = ({
  calendars: months,
  getDateProps,
}: DayzedRenderProps) => {
  return (
    <StyledCalendar>
      {months.length ? (
        <React.Fragment>
          <CalendarWeekdaysLabel weekdays={weekdayNamesShort} />
          {months.map(({ month, year, weeks }, index) => (
            <CalendarMonth key={`${month}${year}${index}`}>
              <CalendarMonthLabel label={`${monthNamesShort[month]} ${year}`} />
              {weeks.map((week) => (
                <CalendarWeek datePropsFn={getDateProps} week={week} />
              ))}
            </CalendarMonth>
          ))}
        </React.Fragment>
      ) : null}
    </StyledCalendar>
  );
};

/* eslint-disable-next-line */
export interface CalendarProps {}

const StyledCalendar = styled.div`
  text-align: center;
  width: 100%;
  & > div:nth-child(2) {
    padding-top: 60px;
  }
`;
