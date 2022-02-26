import { render } from "@testing-library/react";

import DataAccessSaveLink from "./data-access-save-link";

describe("DataAccessSaveLink", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<DataAccessSaveLink />);
    expect(baseElement).toBeTruthy();
  });
});
