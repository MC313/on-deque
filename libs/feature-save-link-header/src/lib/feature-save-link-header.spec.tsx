import { render } from "@testing-library/react";

import FeatureSaveLinkHeader from "./feature-save-link-header";

describe("FeatureSaveLinkHeader", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<FeatureSaveLinkHeader />);
    expect(baseElement).toBeTruthy();
  });
});
