import { LitElement, html } from "lit";
import { defaultStyles } from "../styles/default-style";
import { deleteModaStyles } from "../styles/delete-modal-style";
import "./ui/button-element";

class DeleteModal extends LitElement {
  static styles = [defaultStyles, deleteModaStyles];

  static properties = {
    show: { type: Boolean },
  };

  render() {
    return html`
      <div class="modal" style="display: ${this.show ? "flex" : "none"}" @click="${this._cancelDelete}">
        <div class="modal-content" @click="${this._stopPropagation}">
          <h2>Delete modal</h2>
          <p>Are you sure you want to delete this note?</p>
          <div class="modal-actions">
            <button-element
              type="secondary"
              @click="${this._cancelDelete}"
              label="Cancel"
              className="btn-flex-1"
            >
            </button-element>
            <button-element
              type="primary"
              @click="${this._confirmDelete}"
              label="Delete"
              className="btn-flex-1"
              style="display: flex;"
            >
            </button-element>
          </div>
        </div>
      </div>
    `;
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }

  _cancelDelete() {
    this.dispatchEvent(new CustomEvent("cancel-delete"));
  }

  _confirmDelete() {
    this.dispatchEvent(new CustomEvent("confirm-delete"));
  }
}

customElements.define("delete-modal", DeleteModal);
