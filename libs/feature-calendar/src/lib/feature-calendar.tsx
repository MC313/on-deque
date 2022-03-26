import React from "react";

import styled from "@emotion/styled";
import { RenderProps as DayzedRenderProps } from "dayzed";

import { CalendarMonth } from "@on-deque/feature-calendar/ui-month";
import { CalendarMonthLabel } from "@on-deque/feature-calendar/ui-month-label";
import { CalendarWeek } from "@on-deque/feature-calendar/ui-week";
import { CalendarWeekdaysLabel } from "@on-deque/feature-calendar/ui-weekdays-label";

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

const StyledCalendar = styled.div`
  height: 100%;
  overflow-y: scroll;
  text-align: center;
  width: 100%;
  & > div:nth-child(2) {
    padding-top: 60px;
  }
`;
