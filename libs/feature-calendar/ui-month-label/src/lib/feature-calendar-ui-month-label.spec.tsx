import { render } from "@testing-library/react";

import { CalendarMonthLabel } from "./feature-calendar-ui-month-label";

describe("CalendarMonthLabel", () => {
  it("should render successfully", () => {
    const { baseElement } = render(
      <CalendarMonthLabel>June 1991</CalendarMonthLabel>
    );
    expect(baseElement).toBeTruthy();
  });
});
