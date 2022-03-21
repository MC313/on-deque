import CloseIcon from "../../close.svg";
import { IconButton, IconButtonProps } from "@on-deque/ui-icon-button";

export const CloseButton = ({ name, ...props }: IconButtonProps) => {
  return (
    <IconButton name={name} {...props}>
      <CloseIcon />
    </IconButton>
  );
};
