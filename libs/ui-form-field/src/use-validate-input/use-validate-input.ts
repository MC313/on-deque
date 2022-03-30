import React from "react";

import * as yup from "yup";

import { FormData, ReminderUnit, REMINDER_UNITS } from "../types";

export const useValidateInput: UseValidateInput = (
  inputName,
  errorFn = undefined
) => {
  const [error, setError] = React.useState<InputError>();

  const validateInput = (name: string) => (e: InputEvent) => {
    yup
      .reach(formSchema, name)
      .validate(e.target.value)
      .then(() => setError(undefined))
      .catch(({ errors }: { errors: string[] }) => {
        errorFn && errorFn(e);
        setError(errors[0]);
      });
  };

  return [error, validateInput(inputName)] as const;
};

export const formSchema: FormSchema = yup.object({
  url: yup.string().url("Invalid url value").required("Url is required"),
  description: yup.string().notRequired(),
  tags: yup.string().notRequired(),
  reminderValue: yup.number().required(),
  reminderUnit: yup.mixed<ReminderUnit>().oneOf(REMINDER_UNITS).required(),
});

type UseValidateInput = (
  inputName: string,
  errorFn?: React.ReactEventHandler<HTMLInputElement>
) => UseValidateInputReturn;

type UseValidateInputReturn = Readonly<
  [InputError, React.ReactEventHandler<HTMLInputElement>]
>;

type InputError = undefined | string;

type FormSchema = yup.SchemaOf<Omit<FormData, "datePickerValue">>;

type InputEvent = React.ChangeEvent<HTMLInputElement>;

/* 
yup conditional field: https://github.com/jquense/yup#schemawhenkeys-string--string-builder-object--values-any-schema--schema-schema
reminderUnit: yup.string().when("reminderValue", {
    is: true,
    then: (schema) => schema,
    otherwise: (schema) => schema.default(""),
  }),
*/
