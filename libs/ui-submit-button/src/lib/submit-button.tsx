import { SubmitStatus } from "@on-deque/context-form";
import { Button, ButtonProps } from "@on-deque/ui-button";

export const SubmitButton = ({
  children,
  status,
  ...props
}: SubmitButtonProps) => {
  let content;
  if (status === "INITIAL" || status === "ERROR") {
    content = children;
  } else if (status === "SUBMITTING") {
    content = <p>Loading...</p>;
  } else if (status === "SUCCESS") {
    content = <p>Success!</p>;
  }
  return (
    <Button type="submit" {...props}>
      {content}
    </Button>
  );
};

interface SubmitButtonProps extends ButtonProps {
  children: React.ReactNode;
  status: SubmitStatus;
}
