import { render } from "@testing-library/react";

import SharedUtilFormatReminderText from "./shared-util-format-reminder-text";

describe("SharedUtilFormatReminderText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<SharedUtilFormatReminderText />);
    expect(baseElement).toBeTruthy();
  });
});
