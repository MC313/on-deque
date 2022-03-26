import { render } from "@testing-library/react";

import SharedUtilCapitalize from "./shared-util-capitalize";

describe("SharedUtilCapitalize", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SharedUtilCapitalize />);
    expect(baseElement).toBeTruthy();
  });
});
