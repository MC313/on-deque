import { act, renderHook } from "@testing-library/react-hooks";
import useValidateInput from "./use-validate-input";

describe("useValidateInput", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useValidateInput());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
