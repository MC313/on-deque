import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface UiButtonProps {}

const StyledUiButton = styled.div`
  color: pink;
`;

export function UiButton(props: UiButtonProps) {
  return (
    <StyledUiButton>
      <h1>Welcome to UiButton!</h1>
    </StyledUiButton>
  );
}

export default UiButton;
