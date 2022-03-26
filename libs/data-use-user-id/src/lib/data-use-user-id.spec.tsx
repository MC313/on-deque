import { render } from "@testing-library/react";

import DataUseUserId from "./data-use-user-id";

describe("DataUseUserId", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DataUseUserId />);
    expect(baseElement).toBeTruthy();
  });
});
