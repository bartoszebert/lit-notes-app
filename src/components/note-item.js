import { LitElement, html } from "lit";
import { defaultStyles } from "../styles/default-style";
import { noteItemStyles } from "../styles/note-item-style";
import { truncateText } from "./utils/truncate-text";
import { ariaLabels } from "./utils/aria-labels";
import "./ui/button-element";

class NoteItem extends LitElement {
  static styles = [defaultStyles, noteItemStyles];

  static properties = {
    note: { type: Object },
  };

  render() {
    return html`
      <li class="note" aria-label="${ariaLabels.noteItem}">
        <div class="note-header">
          <h3 class="note-title">${truncateText(this.note.title, 60)}</h3>
          <div class="note-actions">
            <button-element
              type="action"
              @click="${this._editNote}"
              aria-label="${ariaLabels.editNote}"
            >
              <img slot="icon" src="./icons/edit.svg" alt="Edit note" />
            </button-element>
            <button-element
              type="action"
              @click="${this._deleteNote}"
              aria-label="${ariaLabels.deleteNote}"
            >
              <img slot="icon" src="../icons/delete.svg" alt="Delete note" />
            </button-element>
          </div>
        </div>
        <p class="note-content">${truncateText(this.note.content, 200)}</p>
        <div class="note-date">${this.note.date}</div>
      </li>
    `;
  }

  _editNote() {
    this.dispatchEvent(
      new CustomEvent("edit-note", { detail: { note: this.note } })
    );
  }

  _deleteNote() {
    this.dispatchEvent(
      new CustomEvent("delete-note", { detail: { note: this.note } })
    );
  }
}

customElements.define("note-item", NoteItem);
