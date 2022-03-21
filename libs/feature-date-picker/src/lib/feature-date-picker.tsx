import React from "react";

import styled from "@emotion/styled";
import { useDayzed, Props } from "dayzed";

import { Calendar } from "@on-deque/feature-calendar";
import { CloseButton } from "@on-deque/ui-close-button";
import { colors } from "@styles";

export function DatePicker({ active, onClose, ...props }: DatePickerProps) {
  const dayzedData = useDayzed(props);
  const datePicker = React.useRef<HTMLDivElement>(null);
  const [activeState, setActiveState] = React.useState<ActiveStateValue>(
    ACTIVE_TYPES["INACTIVE"]
  );

  const handleClose = () => {
    const activeStateKey =
      activeState.type === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    setActiveState(ACTIVE_TYPES[activeStateKey]);
    onClose && onClose();
  };

  React.useEffect(() => {
    setActiveState(ACTIVE_TYPES[active]);
  }, [active]);

  React.useLayoutEffect(() => {
    if (!datePicker || !datePicker.current) return;
    datePicker.current.style.transform = `translateY(${activeState.value}%)`;
  }, [activeState]);

  return (
    <StyledDatePicker ref={datePicker}>
      <CloseButton aria-label="close-calendar" onClick={handleClose} />
      <Calendar {...dayzedData} />
    </StyledDatePicker>
  );
}

const StyledDatePicker = styled.div`
  background: ${colors.inputBackground};
  height: 380px;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateY(0%);
  width: 100%;
`;

interface DatePickerProps extends Props {
  onClose?: () => void;
  active: keyof typeof ACTIVE_TYPES;
}

const ACTIVE_TYPES = {
  ACTIVE: { type: "ACTIVE", value: 0 },
  INACTIVE: { type: "INACTIVE", value: 100 },
};

type ActiveStateType = typeof ACTIVE_TYPES;
type ActiveStateKey = keyof ActiveStateType;
type ActiveStateValue = ActiveStateType[ActiveStateKey];
