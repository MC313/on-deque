import React from "react";

import {
  FormActions,
  FormDispatch,
  FormDispatchHook,
  FormFieldKeys,
  FormProviderProps,
  FormReducer,
  FormState,
  FormTypeKeys,
  SetFormErrorAction,
  SetInputErrorAction,
  SetInputValueAction,
} from "./types";

const initialForm: FormState = {
  status: "INITIAL",
  error: undefined,
  fields: {
    url: "",
    description: "",
    tags: "",
    reminderUnit: "minute",
    reminderValue: 0,
  },
  errors: {
    url: "",
    description: "",
    tags: "",
    reminderUnit: "",
    reminderValue: "",
  },
};

/**
 * =======================
 *        Reducer
 * =======================
 */
const formReducer: FormReducer = (state, action) => {
  const { payload, type } = action;
  switch (type) {
    case FormTypeKeys.RESET_FORM:
      return {
        ...initialForm,
      };
    case FormTypeKeys.SET_INPUT_VALUE: {
      const { field, value } = payload as SetInputValueAction["payload"];
      return {
        ...state,
        fields: { ...state.fields, [field]: value },
        errors: { ...state.errors, [field]: "" },
      };
    }
    case FormTypeKeys.SET_INPUT_ERROR: {
      const field = payload as SetInputErrorAction["payload"];
      return {
        ...state,
        errors: { ...state.errors, [field]: true },
      };
    }
    case FormTypeKeys.SUBMITTING_FORM:
      return {
        ...state,
        status: "SUBMITTING",
      };
    case FormTypeKeys.SET_FORM_SUCCESS:
      return {
        ...state,
        status: "SUCCESS",
      };
    case FormTypeKeys.SET_FORM_ERROR:
      return {
        ...state,
        error: payload as string,
        status: "ERROR",
      };
    default:
      return state;
  }
};

let FormDispatchContext: React.Context<FormDispatch | undefined>;
let FormStateContext: React.Context<FormState | undefined>;

const { Provider: FormDispatchProvider } = (FormDispatchContext =
  React.createContext<FormDispatch | undefined>(undefined));

const { Consumer: FormConsumer, Provider: FormStateProvider } =
  (FormStateContext = React.createContext<FormState | undefined>(undefined));

/**
 * =======================
 *   Provider Component
 * =======================
 */
const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [state, dispatch] = React.useReducer<FormReducer>(
    formReducer,
    initialForm
  );

  return (
    <FormStateProvider value={state}>
      <FormDispatchProvider value={dispatch}>{children}</FormDispatchProvider>
    </FormStateProvider>
  );
};

/**
 * =======================
 *      Custom Hooks
 * =======================
 */
const useFormDispatch = () => {
  const dispatch = React.useContext(FormDispatchContext);
  if (dispatch === undefined) {
    throw new Error(
      "useFormDispatch can only be used with FormProvider component."
    );
  }
  return {
    formSubmitting: () =>
      dispatch({
        type: FormTypeKeys.SUBMITTING_FORM,
        payload: undefined,
      }),
    formSuccess: () =>
      dispatch({
        type: FormTypeKeys.SET_FORM_SUCCESS,
        payload: undefined,
      }),
    resetForm: () => {
      dispatch({
        type: FormTypeKeys.RESET_FORM,
        payload: undefined,
      });
    },
    setInput:
      (payload: FormFieldKeys) =>
      ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
        dispatch({
          type: FormTypeKeys.SET_INPUT_VALUE,
          payload: {
            field: payload,
            value,
          } as SetInputValueAction["payload"],
        });
      },
    setInputError: (payload: FormFieldKeys) =>
      dispatch({
        type: FormTypeKeys.SET_INPUT_ERROR,
        payload,
      }),
    setFormError: (payload: string) =>
      dispatch({
        type: FormTypeKeys.SET_FORM_ERROR,
        payload,
      }),
  };
};

const useFormState = () => {
  const context = React.useContext(FormStateContext);
  if (context === undefined) {
    throw new Error(
      "useFormState can only be used with FormProvider component."
    );
  }
  return context;
};

const useForm = (): [FormState, FormDispatchHook] => [
  useFormState(),
  useFormDispatch(),
];

export { useForm, FormProvider };
