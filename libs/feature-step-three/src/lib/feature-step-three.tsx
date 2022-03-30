import styled from "@emotion/styled";

import { useForm } from "@on-deque/context-form";
import { useUserId } from "@on-deque/data-use-user-id";
import { InputError } from "@on-deque/ui-input-error";
import { ReviewText } from "@on-deque/ui-review-text";
import { Step } from "@on-deque/ui-step";
import { SubmitButton } from "@on-deque/ui-submit-button";
import { capitalize } from "@on-deque/shared/util-capitalize";
import { millisecondsToDate } from "@on-deque/shared/util-format-date";
import {
  formatPayload,
  validatePayload,
} from "@on-deque/shared/util-format-link-payload";

export const StepThree = () => {
  const [{ error, fields, status }, { submitForm }] = useForm();
  const [userId] = useUserId();
  const fieldsWithId = { userId, ...fields };
  const apiPayload = formatPayload(fieldsWithId);
  const { userId: id, ...formFields } = apiPayload;

  if (!validatePayload(fieldsWithId)) {
    const message = "Invalid userId restart the extension and try again";
  }

  const onSubmit = (e: ButtonMouseEvent) => {
    e.preventDefault();
    submitForm(apiPayload);
  };

  const ReviewElements = Object.entries(formFields).map(createReviewElement);

  return (
    <Step>
      <LinkContent>{ReviewElements}</LinkContent>
      <InputError error={error} />
      <SubmitButton align="bottom" onClick={onSubmit} status={status} primary>
        Save Link
      </SubmitButton>
    </Step>
  );
};

const createReviewElement = (arr: FieldTuple, index: number) => {
  if (!arr) return;
  let [label, value] = arr;
  label = capitalize(label);
  const isReminder = label === "Reminder";
  value = isReminder ? millisecondsToDate(value as string) : value;
  return <ReviewText label={label} value={value} key={index} />;
};

const LinkContent = styled.div`
  height: 300px;
  overflow-y: scroll;
`;

type FieldTuple = [string, FieldValue] | undefined;
type FieldValue = string | number | string[] | undefined;
type ButtonMouseEvent = React.MouseEvent<HTMLButtonElement, MouseEvent>;
