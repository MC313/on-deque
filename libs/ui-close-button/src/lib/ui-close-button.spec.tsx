import { render } from "@testing-library/react";

import UiCloseButton from "./ui-close-button";

describe("UiCloseButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiCloseButton />);
    expect(baseElement).toBeTruthy();
  });
});
