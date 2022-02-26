export type SubmitStatus = "INITIAL" | "ERROR" | "SUBMITTING" | "SUCCESS";

export interface FormFields {
  url: string;
  description?: string;
  tags?: string;
  reminderUnit?: string;
  reminderValue?: number;
}

export type FormFieldKeys = keyof FormFields;

export interface FormFieldsErrors extends Omit<FormFields, "reminderValue"> {
  reminderValue: string;
}

export interface FormState {
  status: SubmitStatus;
  error?: string;
  fields: FormFields;
  errors: FormFieldsErrors;
}

/**
 * =======================
 *    Type Definitions
 * =======================
 */

export enum FormTypeKeys {
  RESET_FORM = "RESET_FORM",
  SET_FORM_ERROR = "SET_FORM_ERROR",
  SET_FORM_SUCCESS = "SET_FORM_SUCCESS",
  SET_INPUT_ERROR = "SET_INPUT_ERROR",
  SET_INPUT_VALUE = "SET_INPUT_VALUE",
  SUBMIT_FORM = "SUBMIT_FORM",
  SUBMITTING_FORM = "SUBMITTING_FORM",
}

export interface FormSubmittingAction {
  type: FormTypeKeys.SUBMITTING_FORM;
  payload?: undefined;
}

export interface FormSuccessAction {
  type: FormTypeKeys.SET_FORM_SUCCESS;
  payload?: undefined;
}

export interface ResetFormAction {
  type: FormTypeKeys.RESET_FORM;
  payload?: undefined;
}

export interface SetInputValueAction {
  type: FormTypeKeys.SET_INPUT_VALUE;
  payload: {
    field: FormFieldKeys;
    value: FormState["fields"][FormFieldKeys];
  };
}

export interface SubmitFormAction {
  type: FormTypeKeys.SUBMIT_FORM;
  payload: FormFields;
}

export interface InputValuePayload {
  payload: SetInputValueAction["payload"]["field"];
}

export interface SetFormErrorAction {
  type: FormTypeKeys.SET_FORM_ERROR;
  payload: string;
}

export interface SetInputErrorAction {
  type: FormTypeKeys.SET_INPUT_ERROR;
  payload: FormFieldKeys;
}

export type FormActions =
  | FormSubmittingAction
  | FormSuccessAction
  | ResetFormAction
  | SubmitFormAction
  | SetFormErrorAction
  | SetInputErrorAction
  | SetInputValueAction;

export type FormDispatch = (action: FormActions) => void;

export type FormReducer = React.Reducer<FormState, FormActions>;

export interface FormProviderProps {
  children: React.ReactNode;
}

export type ActionName =
  | "formSubmitting"
  | "formSuccess"
  | "resetForm"
  | "submitForm"
  | "setFormError"
  | "setInput"
  | "setInputError";

export type FormDispatchHookReturn =
  | void
  | ((e: React.ChangeEvent<HTMLInputElement>) => void);

export type FormDispatchHook = {
  [k in ActionName]: (payload?: any) => any;
};
