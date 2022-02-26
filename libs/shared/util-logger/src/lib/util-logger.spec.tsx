import { render } from "@testing-library/react";

import UtilLogger from "./util-logger";

describe("UtilLogger", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UtilLogger />);
    expect(baseElement).toBeTruthy();
  });
});
