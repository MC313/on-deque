import React from "react";

import {
  StepsActions,
  StepsDispatch,
  StepsReducer,
  StepsTypeKeys,
  StepsDispatchHook,
  StepsProviderProps,
  StepsState,
} from "./types";

const stepsState = { step: 1, totalSteps: 0 };

/**
 * =======================
 *        Reducer
 * =======================
 */

const _validateStep =
  (currentStep: number, total: number) => (newStep: number) => {
    if (newStep < 1 || newStep > total) {
      return currentStep;
    } else {
      return newStep;
    }
  };

const stepsReducer: StepsReducer = (state, action) => {
  const { payload, type } = action;
  const { step, totalSteps } = state;
  const nextStep = step + 1;
  const previousStep = step - 1;
  const validateStep = _validateStep(step, totalSteps);

  switch (type) {
    case StepsTypeKeys.SET_STEP:
      return {
        ...state,
        step: validateStep(payload as number),
      };
    case StepsTypeKeys.PREVIOUS_STEP:
      return {
        ...state,
        step: validateStep(previousStep),
      };
    case StepsTypeKeys.NEXT_STEP:
      return {
        ...state,
        step: validateStep(nextStep),
      };
    default:
      return state;
  }
};

let StepsDispatchContext: React.Context<StepsDispatch | undefined>;
let StepsStateContext: React.Context<StepsState>;

const { Provider: StepsDispatchProvider } = (StepsDispatchContext =
  React.createContext<StepsDispatch | undefined>(undefined));

const { Provider: StepsStateProvider } = (StepsStateContext =
  React.createContext<StepsState>(stepsState));

/**
 * =======================
 *   Provider Component
 * =======================
 */
const StepsProvider: React.FC<StepsProviderProps> = ({
  children,
  totalSteps,
}) => {
  const _state = { ...stepsState, totalSteps };
  const [state, dispatch] = React.useReducer<StepsReducer>(
    stepsReducer,
    _state
  );

  return (
    <StepsStateProvider value={state}>
      <StepsDispatchProvider value={dispatch}>{children}</StepsDispatchProvider>
    </StepsStateProvider>
  );
};

/**
 * =======================
 *      Custom Hooks
 * =======================
 */
const useStepsDispatch = () => {
  const dispatch = React.useContext(StepsDispatchContext);
  if (dispatch === undefined) {
    throw new Error(
      "useAppDispatch can only be used with StepsProvider component."
    );
  }

  return {
    nextStep: () =>
      dispatch({
        type: StepsTypeKeys.NEXT_STEP,
      }),
    previousStep: () =>
      dispatch({
        type: StepsTypeKeys.PREVIOUS_STEP,
      }),
    setStep: (payload: number) =>
      dispatch({
        type: StepsTypeKeys.SET_STEP,
        payload,
      }),
  };
};

const useStepsState = () => {
  const context = React.useContext(StepsStateContext);
  if (context === undefined) {
    throw new Error(
      "useAppState can only be used with WizardProvider component."
    );
  }
  return context;
};

const useSteps = (): [StepsState, StepsDispatchHook] => [
  useStepsState(),
  useStepsDispatch(),
];

export { useSteps, StepsProvider };
