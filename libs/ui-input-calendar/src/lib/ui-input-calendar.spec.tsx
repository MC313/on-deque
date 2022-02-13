import { render } from "@testing-library/react";

import UiInputCalendar from "./ui-input-calendar";

describe("UiInputCalendar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiInputCalendar />);
    expect(baseElement).toBeTruthy();
  });
});
