import styled from "@emotion/styled";

import { colors, fonts } from "@styles";

export const CalendarDay = ({
  background,
  dayData,
  pastDate,
  value,
}: CalendarDayProps) => {
  return (
    <StyledCalendarDay
      {...dayData}
      background={background}
      disabled={pastDate}
      pastDate={pastDate}
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
  value: string | number;
}

const setColor = ({ background, pastDate }: StyledCalendarDayProps) => {
  if (pastDate) return colors.grey;
  if (background !== "transparent") return colors.white;
  return colors.almostBlack;
};

type StyledCalendarDayProps = Pick<CalendarDayProps, "background" | "pastDate">;

const StyledCalendarDay = styled.button<StyledCalendarDayProps>`
  background: ${({ background }) => background};
  border: 1px solid ${({ background }) => background};
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
