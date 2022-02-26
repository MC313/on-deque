import styled from "@emotion/styled";

import { useForm } from "@on-deque/context-form";
import { useSteps } from "@on-deque/context-steps";
import { Button } from "@on-deque/ui-button";
import { ReviewText } from "@on-deque/ui-review-text";
import { Step } from "@on-deque/ui-step";

export const StepThree = () => {
  const [{ fields }, { submitForm }] = useForm();
  const { reminderUnit, reminderValue, ...otherFields } = fields;
  const createReviewElement = (arr: [string, string], index: number) => {
    const [label, value] = arr;
    return <ReviewText label={_capitalize(label)} value={value} key={index} />;
  };
  const ReviewElements = Object.entries(otherFields).map(createReviewElement);

  return (
    <Step scroll>
      {ReviewElements}
      <ReminderInfoElement
        reminderUnit={reminderUnit}
        reminderValue={reminderValue}
      />
      <Button align="bottom" onClick={() => submitForm(fields)} primary>
        Save Link
      </Button>
    </Step>
  );
};

const ReminderInfoElement: React.FC<ReminderInfoElementProps> = ({
  reminderUnit,
  reminderValue,
}) => (
  <ReviewText
    label="Reminder"
    value={_formatReminderText(reminderUnit, reminderValue)}
  />
);

const _capitalize = (text: string) => {
  if (!text) return "";
  const capitalFirstLetter = text[0].toLocaleUpperCase();
  const textArray = text.split("");
  const formattedText = textArray.splice(0, 1, capitalFirstLetter).join("");
  return formattedText;
};

const _formatReminderText = (unit = "", value = 0) => {
  if (!unit || !value) return undefined;
  return `${value} ${value > 1 ? unit + "s" : unit} from now`;
};

interface ReminderInfoElementProps {
  reminderUnit: string | undefined;
  reminderValue: number | undefined;
}
