import { html, fixture, expect } from "@open-wc/testing";
import "../../src/components/ui/button-element.js"; // Adjust the path as necessary

describe("ButtonElement Component", () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<button-element></button-element>`);
  });

  it("should render correctly", () => {
    expect(element.shadowRoot.querySelector("button")).to.exist;
  });

  it("should apply the correct type class", async () => {
    element.type = "secondary";
    await element.updateComplete;
    const button = element.shadowRoot.querySelector("button");
    expect(button.classList.contains("btn-secondary")).to.be.true;
  });

  it("should display the correct label", async () => {
    element.label = "Click Me";
    await element.updateComplete;
    const button = element.shadowRoot.querySelector("button");
    expect(button.textContent.trim()).to.equal("Click Me");
  });

  it("should apply additional class names", async () => {
    element.className = "extra-class";
    await element.updateComplete;
    const button = element.shadowRoot.querySelector("button");
    expect(button.classList.contains("extra-class")).to.be.true;
  });

  it("should render slot content", async () => {
    element = await fixture(html`<button-element>
      <span slot="icon">Icon</span>
    </button-element>`);
    const slotContent = element.shadowRoot.querySelector('slot[name="icon"]');
    expect(slotContent).to.exist;
  });
});
