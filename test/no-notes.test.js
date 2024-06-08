import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/components/no-notes.js"; // Adjust the path as necessary

describe("NoNotes Component", () => {
  let element;

  beforeEach(async () => {
    element = await fixture(html`<no-notes></no-notes>`);
  });

  it("should render correctly", () => {
    expect(element.shadowRoot.querySelector("#no-notes-message")).to.exist;
  });

  it('should display "No notes yet" message when isAllListEmpty is true', async () => {
    element.isAllListEmpty = true;
    await element.updateComplete;
    const message = element.shadowRoot.querySelector("h2");
    expect(message.textContent).to.equal("No notes yet");
  });

  it('should display "No results found" message when isAllListEmpty is false', async () => {
    element.isAllListEmpty = false;
    await element.updateComplete;
    const message = element.shadowRoot.querySelector("h2");
    expect(message.textContent).to.equal("No results found");
  });

  it("should display the add note button when isAllListEmpty is true", async () => {
    element.isAllListEmpty = true;
    await element.updateComplete;
    const button = element.shadowRoot.querySelector(
      'button-element[label="Add new note"]'
    );
    expect(button).to.exist;
  });

  it("should not display the add note button when isAllListEmpty is false", async () => {
    element.isAllListEmpty = false;
    await element.updateComplete;
    const button = element.shadowRoot.querySelector(
      'button-element[label="Add new note"]'
    );
    expect(button).to.not.exist;
  });

  it("should dispatch add-note event on add note button click", async () => {
    element.isAllListEmpty = true;
    await element.updateComplete;
    const spy = sinon.spy();
    element.addEventListener("add-note", spy);
    const button = element.shadowRoot.querySelector(
      'button-element[label="Add new note"]'
    );
    button.click();
    expect(spy.calledOnce).to.be.true;
  });
});
