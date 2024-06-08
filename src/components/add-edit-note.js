import { LitElement, html } from "lit";
import { defaultStyles } from "../styles/default-style.js";
import { addEditStyles } from "../styles/add-edit-note-style.js";
import { formatDate } from "./utils/format-date.js";
import "./ui/input-field.js";
import "./ui/textarea-field.js";
import "./ui/button-element.js";
import "./ui/error-message.js";

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
          ></button-element>
        </div>
        <input-field
          placeholder="Title"
          .value="${this.note?.title}"
          @input-change="${this._updateTitle}"
        ></input-field>
        <error-message
          message="Title field cannot be empty."
          .visible="${this.errorTitle}"
        ></error-message>
        <textarea-field
          placeholder="Write your note here..."
          .value="${this.note?.content}"
          @input-change="${this._updateContent}"
        >
          <button-element
            @click="${this._saveNote}"
            type="primary"
            label="${this.note?.id ? "Save" : "Add"}"
            className="btn-absolute-right"
            label="button"
          ></button-element>
        </textarea-field>
        <error-message
          message="Content field cannot be empty."
          .visible="${this.errorContent}"
        ></error-message>
      </div>
    `;
  }

  _updateTitle(e) {
    this.note = { ...this.note, title: e.detail.value };
  }

  _updateContent(e) {
    this.note = { ...this.note, content: e.detail.value };
  }

  _cancel() {
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
