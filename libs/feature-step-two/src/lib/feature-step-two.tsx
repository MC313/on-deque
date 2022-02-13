import styled from "@emotion/styled";

import { useForm } from "@on-deque/context-form";
import { Button } from "@on-deque/ui-button";
import { Input } from "@on-deque/ui-input";
import { InputCalendar } from "@on-deque/ui-input-calendar";
import { Dropdown } from "@on-deque/ui-input-dropdown";
import { InputLabel } from "@on-deque/ui-input-label";
import { Step } from "@on-deque/ui-step";
import { colors, flex, fonts, height, margin } from "@styles";

export const StepTwo = () => {
  const [{ fields }, { setInput }] = useForm();
  const { reminderValue } = fields;
  const TIME_UNIT_OPTIONS = ["minute", "hour", "day"];

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
      <InputCalendar />
      <Button primary>Continue</Button>
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
