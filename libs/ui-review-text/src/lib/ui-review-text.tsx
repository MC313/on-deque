import styled from "@emotion/styled";

import { colors, fonts } from "@styles";

export const ReviewText = ({ id, label, value }: ReviewTextProps) => (
  <StyledReviewText>
    <StyledLabel htmlFor={id || label}>{label}</StyledLabel>
    <StyledText id={id || label}>{value || "-"}</StyledText>
  </StyledReviewText>
);

const StyledReviewText = styled.div`
  padding: 0px 10px;
`;

const StyledLabel = styled.label`
  fontsize: ${fonts.small};
  color: #909090;
`;

const StyledText = styled.p`
  font-size: ${fonts.large};
  margin: 5px 0px 15px 0px;
  word-break: break-word;
  whitespace: break-spaces;
  color: ${colors.black};
`;

/* eslint-disable-next-line */
interface ReviewTextProps {
  id?: string;
  label: string;
  value?: string | number;
}
