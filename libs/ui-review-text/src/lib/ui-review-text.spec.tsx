import { render } from "@testing-library/react";

import UiReviewText from "./ui-review-text";

describe("UiReviewText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiReviewText />);
    expect(baseElement).toBeTruthy();
  });
});
