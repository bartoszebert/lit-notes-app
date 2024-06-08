import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/components/delete-modal.js"; // Adjust the path as necessary

describe("DeleteModal Component", () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<delete-modal></delete-modal>`);
  });

  it("should render correctly", () => {
    expect(element.shadowRoot.querySelector(".modal")).to.exist;
  });

  it("should show the modal when show is true", async () => {
    element.show = true;
    await element.updateComplete;
    const modal = element.shadowRoot.querySelector(".modal");
    expect(modal.style.display).to.equal("flex");
  });

  it("should hide the modal when show is false", async () => {
    element.show = false;
    await element.updateComplete;
    const modal = element.shadowRoot.querySelector(".modal");
    expect(modal.style.display).to.equal("none");
  });

  it("should dispatch cancel-delete event on cancel button click", async () => {
    element.show = true;
    await element.updateComplete;
    const spy = sinon.spy();
    element.addEventListener("cancel-delete", spy);
    const cancelButton = element.shadowRoot.querySelector(
      'button-element[label="Cancel"]'
    );
    cancelButton.click();
    expect(spy.calledOnce).to.be.true;
  });

  it("should dispatch confirm-delete event on delete button click", async () => {
    element.show = true;
    await element.updateComplete;
    const spy = sinon.spy();
    element.addEventListener("confirm-delete", spy);
    const deleteButton = element.shadowRoot.querySelector(
      'button-element[label="Delete"]'
    );
    deleteButton.click();
    expect(spy.calledOnce).to.be.true;
  });
});
