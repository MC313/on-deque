import { render } from "@testing-library/react";

import FeatureCalendar from "./feature-calendar";

describe("FeatureCalendar", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FeatureCalendar />);
    expect(baseElement).toBeTruthy();
  });
});
