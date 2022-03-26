import styled from "@emotion/styled";

import { colors, fonts } from "@styles";

export const CalendarDay = ({
  background,
  dayData,
  pastDate,
  today,
  value,
}: CalendarDayProps) => {
  return (
    <StyledCalendarDay
      {...dayData}
      background={background}
      disabled={pastDate}
      pastDate={pastDate}
      today={today}
    >
      {value}
    </StyledCalendarDay>
  );
};

/* eslint-disable-next-line */
export interface CalendarDayProps extends React.HTMLProps<HTMLButtonElement> {
  background: string;
  dayData: object;
  pastDate: boolean;
  today: boolean;
  value: string | number;
}

const setColor = ({ background, pastDate }: StyledCalendarDayProps) => {
  if (pastDate) {
    return colors.grey;
  } else if (background !== "transparent") {
    return colors.white;
  } else {
    return colors.almostBlack;
  }
};

type StyledCalendarDayProps = Pick<
  CalendarDayProps,
  "background" | "pastDate" | "today"
>;

const StyledCalendarDay = styled.button<StyledCalendarDayProps>`
  background: ${({ background }) => background};
  border: 2px solid ${({ today }) => (today ? colors.primary : "transparent")};
  border-radius: 50%;
  color: ${setColor};
  display: inline-block;
  font-size: ${fonts.medium};
  height: 40px;
  width: calc(100% / 7);
  &:disabled {
    background: transparent;
  }
`;
