import { render } from "@testing-library/react";

import FeatureCalendarUiDay from "./feature-calendar-ui-day";

describe("FeatureCalendarUiDay", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FeatureCalendarUiDay />);
    expect(baseElement).toBeTruthy();
  });
});
