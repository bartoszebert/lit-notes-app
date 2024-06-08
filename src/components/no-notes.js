import { LitElement, html } from "lit";
import { defaultStyles } from "../styles/default-style";
import "./ui/button-element";
import { noNotesStyles } from "../styles/no-notes-style";

class NoNotes extends LitElement {
  static styles = [defaultStyles, noNotesStyles];

  static properties = {
    isAllListEmpty: { type: Boolean },
  };

  constructor() {
    super();
    this.isAllListEmpty = true;
  }

  render() {
    return html`
      <div id="no-notes-message">
        <img src="./icons/info.svg" alt="" />
        <h2>${this.isAllListEmpty ? "No notes yet" : "No results found"}</h2>
        <p>
          ${this.isAllListEmpty
            ? "Add a note to keep track of your learnings."
            : ""}
        </p>
        ${this.isAllListEmpty
          ? html`
              <button-element
                type="secondary"
                @click="${this._addNote}"
                label="Add new note"
                className="btn-secondary-add"
                style="justify-content: center;"
              >
              </button-element>
            `
          : ""}
      </div>
    `;
  }

  _addNote() {
    this.dispatchEvent(new CustomEvent("add-note"));
  }
}

customElements.define("no-notes", NoNotes);
