import React from "react";

import styled from "@emotion/styled";

export function CalendarMonth({ children }: CalendarMonthProps) {
  return <StyledCalendarMonth>{children}</StyledCalendarMonth>;
}

/* eslint-disable-next-line */
export interface CalendarMonthProps {
  children: React.ReactNode;
}

const StyledCalendarMonth = styled.div`
  box-sizing: border-box;
  display: inline-block;
  padding: 0px 5px 20px;
  width: 90%;
`;
