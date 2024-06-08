import { html, fixture, expect } from "@open-wc/testing";
import sinon from "sinon";
import "../src/components/note-item.js"; // Adjust the path as necessary

describe("NoteItem Component", () => {
  let element;
  const note = {
    title: "Test Note",
    content: "This is a test note content.",
    date: "Jun 8",
  };

  beforeEach(async () => {
    element = await fixture(html`<note-item .note=${note}></note-item>`);
  });

  it("should render correctly", () => {
    const title = element.shadowRoot.querySelector(".note-title");
    const content = element.shadowRoot.querySelector(".note-content");
    const date = element.shadowRoot.querySelector(".note-date");
    expect(title.textContent).to.equal(note.title);
    expect(content.textContent).to.equal(note.content);
    expect(date.textContent).to.equal(note.date);
  });

  it("should render edit and delete buttons", () => {
    const editButton = element.shadowRoot.querySelector(
      'button-element img[src="./icons/edit.svg"]'
    );
    const deleteButton = element.shadowRoot.querySelector(
      'button-element img[src="../icons/delete.svg"]'
    );
    expect(editButton).to.exist;
    expect(deleteButton).to.exist;
  });

  it("should dispatch edit-note event on edit button click", async () => {
    const spy = sinon.spy();
    element.addEventListener("edit-note", spy);
    const editButton = element.shadowRoot.querySelector(
      'button-element img[src="./icons/edit.svg"]'
    );
    editButton.click();
    expect(spy.calledOnce).to.be.true;
    const eventDetail = spy.args[0][0].detail;
    expect(eventDetail.note).to.deep.equal(note);
  });

  it("should dispatch delete-note event on delete button click", async () => {
    const spy = sinon.spy();
    element.addEventListener("delete-note", spy);
    const deleteButton = element.shadowRoot.querySelector(
      'button-element img[src="../icons/delete.svg"]'
    );
    deleteButton.click();
    expect(spy.calledOnce).to.be.true;
    const eventDetail = spy.args[0][0].detail;
    expect(eventDetail.note).to.deep.equal(note);
  });
});
