import { TimeUnit, toUtcTime } from "@on-deque/shared/util-format-date";
import { FormData } from "@on-deque/ui-form-field";

export const formatPayload = (payload: FormFieldsWithUserId) => {
  const { reminderUnit, reminderValue, tags, ...rest } = payload;

  return {
    tags: tags ? tags.split(",").map((tag) => tag.trim()) : [],
    reminder: toUtcTime(reminderValue as number, reminderUnit as TimeUnit),
    ...rest,
  };
};

export const validatePayload = (payload: FormFieldsWithUserId) => {
  type RequiredFields = keyof FormFieldsWithUserId;
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

export interface FormFieldsWithUserId extends FormData {
  userId: string | undefined;
}
