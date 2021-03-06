import BackIcon from "../../arrow-west.svg";
import { IconButton, IconButtonProps } from "@on-deque/ui-icon-button";

export const BackButton = ({ name, ...props }: IconButtonProps) => {
  return (
    <IconButton name={name} {...props}>
      <BackIcon />
    </IconButton>
  );
};
