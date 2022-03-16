import { render } from "@testing-library/react";

import FeatureDatePicker from "./feature-date-picker";

describe("FeatureDatePicker", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FeatureDatePicker />);
    expect(baseElement).toBeTruthy();
  });
});
