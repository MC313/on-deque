import styled from "@emotion/styled";

import calendarImage from "../../calendar.png";
import { colors, fonts, height, padding, radius } from "@styles";

export const InputCalendar = (props: InputCalendarProps) => (
  <StyledInputCalendar placeholder="Select a date" {...props} />
);

const StyledInputCalendar = styled.input`
  background: ${colors.inputBackground};
  background-image: url(../../calendar.png);
  background-repeat: no-repeat;
  border: 2px solid transparent;
  border-radius: ${radius.medium};
  color: ${colors.primary};
  font-size: ${fonts.medium};
  height: ${height.medium};
  margin: 0px auto;
  padding-left: ${padding.medium};
  width: 92%;
  &::placeholder {
    color: ${colors.primary};
    text-align: center;
  }
`;

/* eslint-disable-next-line */
export interface InputCalendarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}
