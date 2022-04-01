import { render } from "@testing-library/react";

import SuccessPopover from "./success-popover";

describe("SuccessPopover", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SuccessPopover />);
    expect(baseElement).toBeTruthy();
  });
});
