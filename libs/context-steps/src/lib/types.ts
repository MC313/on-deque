export type StepsState = { step: number; totalSteps: number };

export enum StepsTypeKeys {
  NEXT_STEP = "NEXT_STEP",
  SET_STEP = "SET_STEP",
}

export interface SetStepAction {
  type: keyof typeof StepsTypeKeys;
  payload?: number;
}

export type StepsActions = SetStepAction;

export type StepsDispatch = (action: StepsActions) => void;

export type StepsReducer = React.Reducer<StepsState, StepsActions>;

export interface StepsProviderProps {
  children: React.ReactNode;
  totalSteps: number;
}

export type ActionName = "nextStep" | "setStep";

export type StepsDispatchHook = {
  [k in ActionName]: (payload?: any) => any;
};
