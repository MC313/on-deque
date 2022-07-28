import {
  TimeUnit,
  toUtcTime,
  unitToMilliseconds,
} from "@on-deque/shared/util-format-date";
import { FormFields } from "@on-deque/context-form";

export const formatFields = (payload: FormFields): FormattedFields => {
  const {
    reminderUnit,
    reminderValue,
    datePickerValue,
    tags,
    description,
    url,
    ...rest
  } = payload;
  const datePicker = setHour(datePickerValue);
  return {
    url,
    description: description || "",
    tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
    reminder: setReminderValue(reminderValue, reminderUnit, datePicker),
    ...rest,
  };
};

export const validatePayload = (payload: LinkAPIPayload) => {
  type RequiredFields = keyof LinkAPIPayload;
  const requiredFields: RequiredFields[] = ["userId", "url"];
  let isValid = true;
  for (const field of requiredFields) {
    if (!payload[field]) {
      console.error(`Invalid form field value ${field}: ${payload[field]}.`);
      isValid = false;
      break;
    }
  }
  return isValid;
};

const setReminderValue = (
  reminderValue: number,
  reminderUnit: string,
  datepicker: string | undefined
) => {
  return reminderValue
    ? toUtcTime(reminderValue, reminderUnit as TimeUnit)
    : datepicker;
};

/*
  This updates the date picker hour value so that the reminder will be sent at 2:00pm instead of 12:00am on the selected day.
*/
const setHour = (datepicker: undefined | string) => {
  if (!datepicker) return datepicker;
  const updatedMillisecs = +datepicker + unitToMilliseconds(14, "hours");
  return updatedMillisecs.toString();
};

export interface FormattedFields
  extends Pick<FormFields, "url" | "description"> {
  reminder: string | number | undefined;
  tags: string[];
}
export interface LinkAPIPayload extends FormattedFields {
  userId: string;
}
