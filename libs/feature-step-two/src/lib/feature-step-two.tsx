import React from "react";

import styled from "@emotion/styled";
import { DateObj } from "dayzed";

import { useForm } from "@on-deque/context-form";
import { useSteps } from "@on-deque/context-steps";
import { DatePicker } from "@on-deque/feature-date-picker";
import {
  dateToUTCMilliseconds,
  formatDate,
} from "@on-deque/shared/util-format-date";
import { Button } from "@on-deque/ui-button";
import { Input } from "@on-deque/ui-input";
import { InputCalendar } from "@on-deque/ui-input-calendar";
import { Dropdown } from "@on-deque/ui-input-dropdown";
import { InputLabel } from "@on-deque/ui-input-label";
import { Step } from "@on-deque/ui-step";
import { flex, fonts, height, margin } from "@styles";

export const StepTwo = () => {
  const [datePickerState, setDatePickerState] =
    React.useState<ActiveState>("INACTIVE");
  const [selectedDate, setSelectedDate] = React.useState<Date>();
  const [{ fields }, { setInput }] = useForm();
  const [, { nextStep }] = useSteps();
  const { reminderValue } = fields;
  const TIME_UNIT_OPTIONS = ["minute", "hour", "day"];

  const showCalendar = () => {
    setDatePickerState("ACTIVE");
  };

  const hideCalendar = () => {
    setDatePickerState("INACTIVE");
  };

  const onSelected = ({ date }: DateObj, evt: React.SyntheticEvent) => {
    evt.preventDefault();
    setSelectedDate(date);
    setInput("reminderValue")({
      target: { value: dateToUTCMilliseconds(date) },
    });
    setInput("reminderUnit")({ target: { value: "calendar" } });
    hideCalendar();
  };

  return (
    <Step center>
      <StyledFormFieldGroup>
        <InputLabel label="Send me a remind me about this link in" />
        <div>
          <Input
            id="reminderValue"
            min={0}
            max={24}
            name="reminderValue"
            onChange={setInput("reminderValue")}
            type="number"
            value={reminderValue}
          />
          <Dropdown
            onChange={setInput("reminderUnit")}
            options={TIME_UNIT_OPTIONS}
            value={reminderValue}
          />
        </div>
      </StyledFormFieldGroup>

      <StyledText>Or</StyledText>

      <InputCalendar onClick={showCalendar} value={formatDate(selectedDate)} />

      <Button align="bottom" onClick={nextStep}>
        Continue
      </Button>

      <DatePicker
        active={datePickerState}
        monthsToDisplay={12}
        onClose={hideCalendar}
        selected={selectedDate}
        onDateSelected={onSelected}
        showOutsideDays={true}
      />
    </Step>
  );
};

const StyledFormFieldGroup = styled.div`
  width: 98%;
  margin: 0 auto;
  margin-bottom: ${margin.medium};
  div {
    ${flex.center};
  }
  input {
    height: ${height.medium};
    margin-right: ${margin.small};
    width: 30%;
  }
  select {
    height: ${height.medium};
    width: 60%;
  }
`;

const StyledText = styled.p`
  font-size: ${fonts.medium};
  margin: ${margin.medium} auto;
`;

type ActiveState = "ACTIVE" | "INACTIVE";
