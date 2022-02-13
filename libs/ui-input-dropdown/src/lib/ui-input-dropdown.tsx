import styled from "@emotion/styled";

import { colors, fonts, padding, radius } from "@styles";

export const Dropdown = ({
  value: dataValue,
  onChange,
  options,
}: DropdownProps) => {
  const formatTimeUnit = (timeUnit: string, timeValue = 0) =>
    timeValue > 1 ? `${timeUnit}s` : timeUnit;

  return (
    <StyledSelectInput onChange={onChange}>
      {options.map((value: string, index: number) => (
        <option key={index} value={value}>
          {formatTimeUnit(value, dataValue)}
        </option>
      ))}
    </StyledSelectInput>
  );
};

/* eslint-disable-next-line */
export interface DropdownProps {
  onChange: () => void;
  options: string[];
  value?: any;
}

const StyledSelectInput = styled.select`
  background: ${colors.inputBackground};
  border: 2px solid transparent;
  border-radius: ${radius.medium};
  font-size: ${fonts.medium};
  height: 40px;
  padding-left: ${padding.medium};
  width: 100%;
`;
