import React from "react";

import styled from "@emotion/styled";
import { css } from "@emotion/react";

import { Input, InputProps } from "@on-deque/ui-input";
import { InputLabel, LabelProps } from "@on-deque/ui-input-label";
import { colors, flex, radius } from "@styles";
import { InputError } from "@on-deque/ui-input-error";
import { useValidateInput } from "../use-validate-input/use-validate-input";

export enum LabelStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum InputStatus {
  FOCUS = "FOCUS",
  BLUR = "BLUR",
}

export const FormField = ({
  id,
  label,
  labelType = "standard",
  name,
  onChange,
  onError,
  placeholder,
  required,
  styles = {},
  value,
  ...props
}: FormFieldProps) => {
  const [labelStatus, setLabelStatus] = React.useState<LabelStatus>(
    LabelStatus.ACTIVE
  );
  const [inputStatus, setInputStatus] = React.useState<InputStatus>(
    InputStatus.BLUR
  );
  const [error, validateInput] = useValidateInput(name, onError);

  const onBlur = (e: React.SyntheticEvent<HTMLInputElement>) => {
    setInputStatus(InputStatus.BLUR);
    validateInput(e);
  };
  const isFloatingLabel = labelType === "floating";
  const _id = id || name;
  const _placeholder = label && isFloatingLabel ? "" : placeholder;
  const LabelInputWrapper = isFloatingLabel ? "div" : React.Fragment;

  React.useEffect(() => {
    const status = getLabelStatus(inputStatus, value);
    setLabelStatus(status);
  }, [value, inputStatus]);

  return (
    <StyledFormField isFloatingLabel={isFloatingLabel} styles={styles}>
      <LabelInputWrapper>
        {label && (
          <InputLabel
            htmlFor={name}
            label={label}
            labelStatus={labelStatus}
            labelType={labelType}
            required={required}
          />
        )}
        <Input
          {...props}
          id={_id}
          labelType={labelType}
          onBlur={onBlur}
          onFocus={() => setInputStatus(InputStatus.FOCUS)}
          onChange={onChange}
          placeholder={_placeholder}
          required={required}
        />
      </LabelInputWrapper>
      <InputError error={error} />
    </StyledFormField>
  );
};

const getLabelStatus = (inputStatus: InputStatus, inputValue: any) => {
  let status: LabelStatus;
  const inputFocus = inputStatus === InputStatus.FOCUS;
  const inputBlur = inputStatus === InputStatus.BLUR;

  if (inputFocus || (inputBlur && inputValue)) {
    status = LabelStatus.ACTIVE;
  } else {
    status = LabelStatus.INACTIVE;
  }
  return status;
};

const labelInputWrapperStyles = css`
  ${flex.column};
  background: ${colors.inputBackground};
  border-radius: ${radius.large};
  height: 60px;
  justify-content: end;
  padding-top: 5px;
`;

const StyledFormField = styled.div<StyledFormFieldProps>`
  margin: 0 auto;
  margin-bottom: 5px;
  overflow: hidden;
  width: 94%;
  ${({ isFloatingLabel }) =>
    !isFloatingLabel && { ...labelInputWrapperStyles }};
  ${({ styles }: { styles: React.CSSProperties }) => ({ ...styles })};
  & > div {
    ${({ isFloatingLabel }) =>
      isFloatingLabel && { ...labelInputWrapperStyles }};
  }
`;

/* eslint-disable-next-line */
export interface FormFieldProps extends InputProps, Omit<LabelProps, "label"> {
  label?: undefined | string;
  labelType?: LabelType;
  name: string;
  styles?: React.CSSProperties;
}

interface StyledFormFieldProps {
  isFloatingLabel: boolean;
  styles: React.CSSProperties;
}

type LabelType = "standard" | "floating";
