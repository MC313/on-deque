import { render } from "@testing-library/react";

import SharedUtilGetUserId from "./shared-util-get-user-id";

describe("SharedUtilGetUserId", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SharedUtilGetUserId />);
    expect(baseElement).toBeTruthy();
  });
});
