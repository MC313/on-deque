import { render } from "@testing-library/react";

import FeatureCalendarUiWeek from "./feature-calendar-ui-week";

describe("FeatureCalendarUiWeek", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FeatureCalendarUiWeek />);
    expect(baseElement).toBeTruthy();
  });
});
