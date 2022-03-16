import styled from "@emotion/styled";
import Dayzed, { RenderProps as DayzedRenderProps, useDayzed } from "dayzed";

import { Calendar } from "@on-deque/feature-calendar";

export function DatePicker(props: any) {
  const dayzedData = useDayzed(props);
  return (
    <StyledDatePicker>
      <Calendar {...dayzedData} />
    </StyledDatePicker>
  );
}

/* eslint-disable-next-line */
export interface DatePickerProps {}

const StyledDatePicker = styled.div``;
