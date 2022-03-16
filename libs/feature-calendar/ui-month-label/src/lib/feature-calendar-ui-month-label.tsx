import React from "react";

import styled from "@emotion/styled";

import { colors } from "@styles";

export const CalendarMonthLabel = ({ label }: CalendarMonthLabelProps) => (
  <StyledCalendarMonthLabel>{label}</StyledCalendarMonthLabel>
);

/* eslint-disable-next-line */
export interface CalendarMonthLabelProps {
  label: string;
}

const StyledCalendarMonthLabel = styled.h1`
  color: ${colors.almostBlack};
  text-align: left;
`;
