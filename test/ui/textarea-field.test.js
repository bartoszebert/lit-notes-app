import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../../src/components/ui/textarea-field.js"; // Adjust the path as necessary

describe("TextareaField Component", () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<textarea-field></textarea-field>`);
  });

  it("should render correctly", () => {
    expect(element.shadowRoot.querySelector("textarea")).to.exist;
  });

  it("should display the correct placeholder", async () => {
    element.placeholder = "Enter text";
    await element.updateComplete;
    const textarea = element.shadowRoot.querySelector("textarea");
    expect(textarea.placeholder).to.equal("Enter text");
  });

  it("should set the initial value", async () => {
    element.value = "Initial Value";
    await element.updateComplete;
    const textarea = element.shadowRoot.querySelector("textarea");
    expect(textarea.value).to.equal("Initial Value");
  });

  it("should dispatch input-change event on input", async () => {
    const spy = sinon.spy();
    element.addEventListener("input-change", spy);
    const textarea = element.shadowRoot.querySelector("textarea");
    textarea.value = "New Value";
    textarea.dispatchEvent(new Event("input"));
    await element.updateComplete;
    expect(spy.calledOnce).to.be.true;
    const eventDetail = spy.args[0][0].detail;
    expect(eventDetail.value).to.equal("New Value");
  });

  it("should render slot content", async () => {
    element = await fixture(html`<textarea-field>
      <span slot="button">Button</span>
    </textarea-field>`);
    const slotContent = element.shadowRoot.querySelector('slot[name="button"]');
    expect(slotContent).to.exist;
  });
});
