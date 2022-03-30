import {
  TimeUnit,
  toUtcTime,
  unitToMilliseconds,
} from "@on-deque/shared/util-format-date";
import { FormData } from "@on-deque/ui-form-field";

export const formatPayload = (payload: LinkAPIPayload) => {
  const {
    reminderUnit,
    reminderValue,
    datePickerValue,
    tags,
    description,
    url,
    ...rest
  } = payload;
  const datePicker = _setHour(datePickerValue);
  return {
    url,
    description: description || "",
    tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
    reminder: _setReminderValue(reminderValue, reminderUnit, datePicker),
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

const _setReminderValue = (
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
const _setHour = (datepicker: undefined | string) => {
  if (!datepicker) return datepicker;
  const updatedMillisecs = +datepicker + unitToMilliseconds(14, "hours");
  return updatedMillisecs.toString();
};

export interface LinkAPIPayload extends FormData {
  userId: string;
}
