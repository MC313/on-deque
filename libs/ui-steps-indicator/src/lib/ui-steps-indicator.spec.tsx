import { render } from "@testing-library/react";

import UiStepsIndicator from "./ui-steps-indicator";

describe("UiStepsIndicator", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiStepsIndicator />);
    expect(baseElement).toBeTruthy();
  });
});
