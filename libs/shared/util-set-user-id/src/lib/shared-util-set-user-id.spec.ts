import { render } from "@testing-library/react";

import SharedUtilSetUserId from "./shared-util-set-user-id";

describe("SharedUtilSetUserId", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SharedUtilSetUserId />);
    expect(baseElement).toBeTruthy();
  });
});
