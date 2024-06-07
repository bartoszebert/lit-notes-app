import { LitElement, html, css } from "lit";
import "./ui/input-field.js";
import "./ui/textarea-field.js";
import "./ui/button-element.js";
import { defaultStyles } from "../styles/default-style.js";
import { addEditStyles } from "../styles/add-edit-note-style.js";

class AddEditNote extends LitElement {
  static styles = [defaultStyles, addEditStyles];

  static properties = {
    note: { type: Object },
    show: { type: Boolean },
  };

  constructor() {
    super();
    this.note = { title: "", content: "" };
    this.show = false;
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
          ></button-element>
        </textarea-field>
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
    this.dispatchEvent(
      new CustomEvent("save-note", { detail: { note: this.note } })
    );
  }
}

customElements.define("add-edit-note", AddEditNote);
