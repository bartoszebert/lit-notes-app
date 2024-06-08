import { html, fixture, expect, elementUpdated } from "@open-wc/testing";
import sinon from "sinon";
import "../src/components/notes-list.js";
import "../src/components/note-item.js";
import "../src/components/no-notes.js";

describe("NotesList Component", () => {
  let element;
  const notes = [
    { title: "Note 1", content: "Content 1", date: "Jun 8" },
    { title: "Note 2", content: "Content 2", date: "Jun 9" },
  ];

  beforeEach(async () => {
    element = await fixture(
      html`<notes-list .notes=${notes} .allNotes=${notes}></notes-list>`
    );
  });

  it("should render correctly", () => {
    const notesList = element.shadowRoot.querySelector("#notes-list");
    expect(notesList).to.exist;
  });

  it("should render the correct number of note items", () => {
    const noteItems = element.shadowRoot.querySelectorAll("note-item");
    expect(noteItems.length).to.equal(notes.length);
  });

  it("should display no-notes component when notes list is empty", async () => {
    element.notes = [];
    await element.updateComplete;
    const noNotes = element.shadowRoot.querySelector("no-notes");
    expect(noNotes).to.exist;
  });

  it("should not display no-notes component when notes list is not empty", async () => {
    const noNotes = element.shadowRoot.querySelector("no-notes");
    expect(noNotes).to.not.exist;
  });

  it("should dispatch edit-note event on edit note", async () => {
    const spy = sinon.spy();
    element.addEventListener("edit-note", spy);
    const noteItem = element.shadowRoot.querySelector("note-item");
    noteItem._editNote();
    expect(spy.calledOnce).to.be.true;
    const eventDetail = spy.args[0][0].detail;
    expect(eventDetail.note).to.deep.equal(notes[0]);
  });

  it("should dispatch delete-note event on delete note", async () => {
    const spy = sinon.spy();
    element.addEventListener("delete-note", spy);
    const noteItem = element.shadowRoot.querySelector("note-item");
    noteItem._deleteNote();
    expect(spy.calledOnce).to.be.true;
    const eventDetail = spy.args[0][0].detail;
    expect(eventDetail.note).to.deep.equal(notes[0]);
  });

  it("should dispatch add-note event on add note button click", async () => {
    element.notes = [];
    element.allNotes = [];
    await element.requestUpdate();
    await element.updateComplete;

    const spy = sinon.spy();
    element.addEventListener("add-note", spy);
    const noNotes = element.shadowRoot.querySelector("no-notes");
    await elementUpdated(noNotes);
    const noNotesShadowRoot = noNotes.shadowRoot;
    expect(noNotesShadowRoot).to.exist;

    const addButton = noNotesShadowRoot.querySelector("button-element");
    addButton.click();
    expect(spy.calledOnce).to.be.true;
  });
});
