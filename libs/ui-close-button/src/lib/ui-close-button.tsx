import styled from "@emotion/styled";

import CloseIcon from "../../close.svg";
import { IconButton, IconButtonProps } from "@on-deque/ui-icon-button";

export const CloseButton = ({ name, ...props }: IconButtonProps) => {
  return (
    <StyledClosedButton name={name} {...props}>
      <CloseIcon />
    </StyledClosedButton>
  );
};

const StyledClosedButton = styled(IconButton)`
  margin-left: 15px;
  margin-top: 10px;
`;
