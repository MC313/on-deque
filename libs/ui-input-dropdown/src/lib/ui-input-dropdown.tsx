import React from 'react';

import styled from '@emotion/styled';

import { colors, fonts, padding, radius } from "@styles";

export const Dropdown = ({ value: dataValue, onChange, options }: DropdownProps) => {

  const formatTimeUnit = (timeUnit: string, timeValue = 0) =>
        timeValue > 1 ? `${timeUnit}s` : timeUnit;

    return (
      <StyledSelectInput onChange={ onChange }>
        {
          options.map((value: string, index: number) =>
            <option key={ index } value={ value }>
              { formatTimeUnit(value, dataValue) }
            </option>
          )
        }
      </StyledSelectInput>
    )
}


/* eslint-disable-next-line */
export interface DropdownProps {
  onChange: () => void;
  options: string[];
  value?: any;
};

const StyledSelectInput = styled.select`
  width: 100%;
  height: 40px;
  border: 2px solid;
  border-radius: ${radius.small};
  padding-left: ${padding.medium};
  font-size: ${fonts.medium};
  background: ${colors.white};
`;
