import { render } from "@testing-library/react";

import SharedUtilFormatLinkPayload from "./shared-util-format-link-payload";

describe("SharedUtilFormatLinkPayload", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SharedUtilFormatLinkPayload />);
    expect(baseElement).toBeTruthy();
  });
});
