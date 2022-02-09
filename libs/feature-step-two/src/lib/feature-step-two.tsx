import styled from "@emotion/styled";

import { useForm } from "@on-deque/context-form";
import { Dropdown } from "@on-deque/ui-input-dropdown";
import { InputLabel } from "@on-deque/ui-input-label";
import { FormField } from "@on-deque/ui-form-field";
import { Step } from "@on-deque/ui-step";
import { margin } from "@styles";

export const StepTwo = () => {
    const [{ fields }, dispatch] = useForm();
    const { reminderValue } = fields;
    const TIME_UNIT_OPTIONS = ["minute", "hour", "day"];

    return (
        <Step center>
            <StyledFormFieldGroup>
                <InputLabel label="Send me a remind me about this link in"/>
                <div>
                  <FormField
                      id="reminderValue"
                      min={ 0 }
                      max={ 24 }
                      name="reminderValue"
                      onChange={ dispatch.setInput("reminderValue") }
                      required={ false }
                      styles={ { flex: "1 0 50px", marginRight: 15 } }
                      type="number"
                      value={ reminderValue }
                  />
                  <Dropdown
                      onChange={ dispatch.setInput("reminderUnit") }
                      options={ TIME_UNIT_OPTIONS }
                      value={ reminderValue }
                  />
                </div>
            </StyledFormFieldGroup>
        </Step>
    );
};

const StyledFormFieldGroup = styled.div`
  width: 98%;
  margin: 0 auto;
  marginBottom: ${margin.medium};
  div: {
      display: flex;
      flexFlow: row wrap;
  },
  p: {
      minHeight: 20px;
      height: 20px;
      margin: 5px 0px 0px 0px;
      color: red;
  }
`;