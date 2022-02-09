import styled from "@emotion/styled";

import { colors, fonts } from "@styles";

export const InputError = ({ error }: InputErrorProps) => (
  <StyledInputError aria-live="assertive">{error}</StyledInputError>
);

/* eslint-disable-next-line */
export interface InputErrorProps {
  error: undefined | string;
}

const StyledInputError = styled.span`
  background: ${colors.white};
  color: ${colors.red};
  display: block;
  font-size: ${fonts.medium};
  height: 20px;
  margin: 5px 0px 0px 15px;
`;
