import { render } from "@testing-library/react";

import UiIconButton from "./ui-icon-button";

describe("UiIconButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiIconButton />);
    expect(baseElement).toBeTruthy();
  });
});
