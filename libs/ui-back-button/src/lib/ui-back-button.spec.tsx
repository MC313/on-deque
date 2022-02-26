import { render } from "@testing-library/react";

import UiBackButton from "./ui-back-button";

describe("UiBackButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiBackButton />);
    expect(baseElement).toBeTruthy();
  });
});
