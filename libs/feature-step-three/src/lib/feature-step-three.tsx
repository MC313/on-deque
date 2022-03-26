import styled from "@emotion/styled";

import { useForm } from "@on-deque/context-form";
import { useUserId } from "@on-deque/data-use-user-id";
import { InputError } from "@on-deque/ui-input-error";
import { ReviewText } from "@on-deque/ui-review-text";
import { Step } from "@on-deque/ui-step";
import { SubmitButton } from "@on-deque/ui-submit-button";
import { capitalize } from "@on-deque/shared/util-capitalize";
import {
  formatPayload,
  validatePayload,
} from "@on-deque/shared/util-format-link-payload";
import { formatReminderText } from "@on-deque/shared/util-format-reminder-text";

export const StepThree = () => {
  const [{ error, fields, status }, { submitForm }] = useForm();
  const { reminderUnit, reminderValue, ...otherFields } = fields;
  const [userId] = useUserId();

  const createReviewElement = (arr: [string, string], index: number) => {
    const [label, value] = arr;
    const _label = capitalize(label);
    return <ReviewText label={_label} value={value} key={index} />;
  };

  const onSubmit = (e: ButtonMouseEvent) => {
    e.preventDefault();
    const fieldsWithUserId = { userId, ...fields };
    if (!validatePayload(fieldsWithUserId)) return;
    const apiPayload = formatPayload(fieldsWithUserId);
    submitForm(apiPayload);
  };
  const ReviewElements = Object.entries(otherFields).map(createReviewElement);

  return (
    <Step>
      <LinkContent>
        {ReviewElements}
        <ReminderInfoElement
          reminderUnit={reminderUnit}
          reminderValue={reminderValue}
        />
      </LinkContent>
      <InputError error={error} />
      <SubmitButton align="bottom" onClick={onSubmit} status={status} primary>
        Save Link
      </SubmitButton>
    </Step>
  );
};

const LinkContent = styled.div`
  height: 300px;
  overflow-y: scroll;
`;

const ReminderInfoElement: React.FC<ReminderInfoElementProps> = ({
  reminderUnit,
  reminderValue,
}) => (
  <ReviewText
    label="Reminder"
    value={formatReminderText(reminderUnit, reminderValue)}
  />
);

interface ReminderInfoElementProps {
  reminderUnit: string | undefined;
  reminderValue: number | undefined;
}

type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
