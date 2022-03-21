import styled from "@emotion/styled";

import { colors, fonts } from "@styles";

export const CalendarWeekdaysLabel = ({
  weekdays,
}: CalendarWeekdaysLabelProps) => {
  const _weekdays = weekdays.map((weekday, idx) => (
    <StyledCalendarWeekdayLabel key={idx}>{weekday}</StyledCalendarWeekdayLabel>
  ));
  return (
    <StyledCalendarWeekdayContainer>{_weekdays}</StyledCalendarWeekdayContainer>
  );
};

/* eslint-disable-next-line */
export interface CalendarWeekdaysLabelProps {
  weekdays: string[];
}

const StyledCalendarWeekdayContainer = styled.div`
  background: linear-gradient(
    ${colors.inputBackground} 70%,
    rgba(255, 255, 255, 0.5)
  );
  height: 60px;
  margin: auto 5%;
  padding: 20px 0px;
  position: fixed;
  width: 90%;
`;

const StyledCalendarWeekdayLabel = styled.div`
  border: none;
  display: inline-block;
  font-size: ${fonts.large};
  width: calc(100% / 7);
`;
