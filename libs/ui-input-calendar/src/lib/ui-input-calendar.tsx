import React from "react";

import styled from "@emotion/styled";

import { colors, fonts, height, radius } from "@styles";
import { Button } from "@on-deque/ui-button";

export const InputCalendar = ({
  onClick,
  value,
  ...props
}: InputCalendarProps) =>
  value ? (
    <StyledCalendarInput
      onFocus={onClick}
      value={value}
      readOnly={true}
      {...props}
    />
  ) : (
    <StyledCalendarButton onClick={onClick}>Select a date</StyledCalendarButton>
  );

const StyledCalendarInput = styled.input`
  background: ${colors.inputBackground};
  border: 2px solid transparent;
  border-radius: ${radius.medium};
  color: ${colors.primary};
  font-size: ${fonts.medium};
  height: ${height.medium};
  margin: 0px auto;
  text-align: center;
  width: 92%;
  &::placeholder {
    color: ${colors.primary};
    text-align: center;
  }
`;

const StyledCalendarButton = styled(Button)`
  background: ${colors.inputBackground};
  border: 2px solid transparent;
  box-shadow: none;
  color: ${colors.primary};
  font-size: ${fonts.medium};
  width: 92%;
`;

/* eslint-disable-next-line */
export interface InputCalendarProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onClick: () => void;
}
