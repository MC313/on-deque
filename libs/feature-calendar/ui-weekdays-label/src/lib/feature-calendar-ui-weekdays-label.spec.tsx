import { render } from "@testing-library/react";

import FeatureCalendarUiWeekdaysLabel from "./feature-calendar-ui-weekdays-label";

describe("FeatureCalendarUiWeekdaysLabel", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FeatureCalendarUiWeekdaysLabel />);
    expect(baseElement).toBeTruthy();
  });
});
