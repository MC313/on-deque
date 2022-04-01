import React from "react";

import styled from "@emotion/styled";

import { useForm } from "@on-deque/context-form";
import { useSteps } from "@on-deque/context-steps";
import { Button } from "@on-deque/ui-button";
import { colors, flex, fonts } from "@styles";

export const SuccessPopover = () => {
  const popoverRef = React.useRef<HTMLDivElement>(null);
  const [popoverState, setPopoverState] = React.useState<ActiveState>("ACTIVE");
  const [{ status }] = useForm();
  const [_, { setStep }] = useSteps();
  const onClick = () => {
    setStep(1);
    setPopoverState("INACTIVE");
  };

  React.useLayoutEffect(() => {
    const isactive = status === "SUCCESS" && popoverState === "ACTIVE";
    if (popoverRef && popoverRef.current) {
      popoverRef.current.style.display = isactive ? "flex" : "none";
    }
  }, [status, popoverState]);

  return (
    <StyledSuccessPopover ref={popoverRef}>
      <h1>Done!</h1>
      <h1>Link saved successfully</h1>
      <StyledButton onClick={onClick}>Save another link</StyledButton>
    </StyledSuccessPopover>
  );
};

const StyledSuccessPopover = styled.div`
  ${flex.center};
  ${flex.column};
  background: ${colors.primary};
  color: ${colors.white};
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 15;
`;

const StyledButton = styled(Button)`
  background: ${colors.white};
  border: ${colors.white};
  box-shadow: none;
  color: ${colors.purple};
  font-size: ${fonts.medium};
  margin-top: 40px;
`;

type ActiveState = "ACTIVE" | "INACTIVE";
