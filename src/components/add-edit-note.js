import { LitElement, html } from "lit";
import { defaultStyles } from "../styles/default-style.js";
import { addEditStyles } from "../styles/add-edit-note-style.js";
import { formatDate } from "./utils/format-date.js";
import "./ui/input-field.js";
import "./ui/textarea-field.js";
import "./ui/button-element.js";
import "./ui/error-message.js";
import { ariaLabels } from "./utils/aria-labels.js";

class AddEditNote extends LitElement {
  static styles = [defaultStyles, addEditStyles];

  static properties = {
    note: { type: Object },
    show: { type: Boolean },
    errorTitle: { type: Boolean },
    errorContent: { type: Boolean },
  };

  constructor() {
    super();
    this.note = { title: "", content: "", date: "" };
    this.show = false;
    this.errorTitle = false;
    this.errorContent = false;
  }

  render() {
    return html`
      <div
        class="add-edit-note-form"
        style="display: ${this.show ? "flex" : "none"}"
      >
        <div class="add-note-title">
          <h3>${this.note?.id ? "Edit Note" : "Add new note"}</h3>
          <button-element
            @click="${this._cancel}"
            type="cancel"
            label="Cancel"
            className="btn-cancel"
            aria-label="${ariaLabels.cancelEdit}"
          ></button-element>
        </div>
        <input-field
          placeholder="Title"
          .value="${this.note?.title}"
          @input-change="${this._updateTitle}"
          aria-label="${ariaLabels.title}"
        ></input-field>
        <error-message
          message="Title field cannot be empty."
          .visible="${this.errorTitle}"
          aria-label="${ariaLabels.errorTitle}"
        ></error-message>
        <textarea-field
          placeholder="Write your note here..."
          .value="${this.note?.content}"
          @input-change="${this._updateContent}"
          aria-label="${ariaLabels.content}"
        >
          <button-element
            @click="${this._saveNote}"
            type="primary"
            label="${this.note?.id ? "Save" : "Add"}"
            className="btn-absolute-right"
            slot="button"
            aria-label="${ariaLabels.saveNote}"
          ></button-element>
        </textarea-field>
        <error-message
          message="Content field cannot be empty."
          .visible="${this.errorContent}"
          aria-label="${ariaLabels.errorContent}"
        ></error-message>
      </div>
    `;
  }

  _updateTitle(e) {
    if (this.errorTitle) this.errorTitle = false;
    this.note = { ...this.note, title: e.detail.value };
  }

  _updateContent(e) {
    if (this.errorContent) this.errorContent = false;
    this.note = { ...this.note, content: e.detail.value };
  }

  _cancel() {
    this.errorTitle = false;
    this.errorContent = false;
    this.dispatchEvent(new CustomEvent("cancel-edit"));
  }

  _saveNote() {
    this.errorTitle = !this.note.title;
    this.errorContent = !this.note.content;

    if (this.errorTitle || this.errorContent) return;

    const formattedDate = formatDate(new Date());
    this.dispatchEvent(
      new CustomEvent("save-note", {
        detail: { note: { ...this.note, date: formattedDate } },
      })
    );
  }
}

customElements.define("add-edit-note", AddEditNote);
