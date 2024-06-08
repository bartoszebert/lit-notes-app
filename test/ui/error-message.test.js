import { html, fixture, expect } from "@open-wc/testing";
import "../../src/components/ui/error-message.js"; // Adjust the path as necessary

describe("ErrorMessage Component", () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<error-message></error-message>`);
  });

  it("should not render the error message when visible is false", async () => {
    expect(element.shadowRoot.querySelector("#error-message")).to.not.exist;
  });

  it("should render the error message when visible is true", async () => {
    element.visible = true;
    await element.updateComplete;
    expect(element.shadowRoot.querySelector("#error-message")).to.exist;
  });

  it("should display the correct message", async () => {
    element.message = "This is an error message";
    element.visible = true;
    await element.updateComplete;
    const errorMessage = element.shadowRoot.querySelector("#error-message p");
    expect(errorMessage.textContent).to.equal("This is an error message");
  });

  it("should hide the error message when visible is set to false", async () => {
    element.visible = true;
    await element.updateComplete;
    expect(element.shadowRoot.querySelector("#error-message")).to.exist;

    element.visible = false;
    await element.updateComplete;
    expect(element.shadowRoot.querySelector("#error-message")).to.not.exist;
  });
});
