import { render } from "@testing-library/react";

import FeatureCalendarUiMonth from "./feature-calendar-ui-month";

describe("FeatureCalendarUiMonth", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FeatureCalendarUiMonth />);
    expect(baseElement).toBeTruthy();
  });
});
