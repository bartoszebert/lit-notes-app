import { LitElement, html } from "lit";
import { defaultStyles } from "../styles/default-style.js";
import { notesListStyles } from "../styles/notes-list-style.js";
import "./note-item.js";
import "./no-notes.js";

class NotesList extends LitElement {
  static styles = [defaultStyles, notesListStyles];

  static properties = {
    notes: { type: Array },
    allNotes: { type: Array },
  };

  constructor() {
    super();
    this.notes = [];
    this.allNotes = [];
  }

  render() {
    const isListEmpty = this.notes.length === 0;

    return html`
      <section id="notes">
        <ul id="notes-list">
          ${this.notes.map(
            (note) => html`
              <note-item
                .note="${note}"
                @edit-note="${this._editNote}"
                @delete-note="${this._deleteNote}"
              ></note-item>
            `
          )}
        </ul>
        ${isListEmpty
          ? html`
              <no-notes
                @add-note="${this._addNote}"
                .isAllListEmpty="${!Boolean(this.allNotes.length)}"
              >
              </no-notes>
            `
          : ""}
      </section>
    `;
  }

  _editNote(e) {
    this.dispatchEvent(new CustomEvent("edit-note", { detail: e.detail }));
  }

  _deleteNote(e) {
    this.dispatchEvent(new CustomEvent("delete-note", { detail: e.detail }));
  }

  _addNote() {
    this.dispatchEvent(new CustomEvent("add-note"));
  }
}

customElements.define("notes-list", NotesList);
