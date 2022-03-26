import { render } from "@testing-library/react";

import SharedUtilFormatDate from "./shared-util-format-date";

describe("SharedUtilFormatDate", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SharedUtilFormatDate />);
    expect(baseElement).toBeTruthy();
  });
});
