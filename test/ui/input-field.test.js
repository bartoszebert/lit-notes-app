import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../../src/components/ui/input-field.js"; // Adjust the path as necessary

describe("InputField Component", () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<input-field></input-field>`);
  });

  it("should render correctly", () => {
    expect(element.shadowRoot.querySelector("input")).to.exist;
  });

  it("should apply the correct type", async () => {
    element.type = "password";
    await element.updateComplete;
    const input = element.shadowRoot.querySelector("input");
    expect(input.type).to.equal("password");
  });

  it("should display the correct placeholder", async () => {
    element.placeholder = "Enter text";
    await element.updateComplete;
    const input = element.shadowRoot.querySelector("input");
    expect(input.placeholder).to.equal("Enter text");
  });

  it("should set the initial value", async () => {
    element.value = "Initial Value";
    await element.updateComplete;
    const input = element.shadowRoot.querySelector("input");
    expect(input.value).to.equal("Initial Value");
  });

  it("should dispatch input-change event on input", async () => {
    const spy = sinon.spy();
    element.addEventListener("input-change", spy);
    const input = element.shadowRoot.querySelector("input");
    input.value = "New Value";
    input.dispatchEvent(new Event("input"));
    await element.updateComplete;
    expect(spy.calledOnce).to.be.true;
    const eventDetail = spy.args[0][0].detail;
    expect(eventDetail.value).to.equal("New Value");
  });
});
