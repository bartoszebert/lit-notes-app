import { LitElement, html, css } from "lit";
import { defaultStyles } from "../../styles/default-style";
import { inputFieldStyles } from "../../styles/ui/input-field-style";

class InputField extends LitElement {
  static styles = [defaultStyles, inputFieldStyles];

  static properties = {
    type: { type: String },
    placeholder: { type: String },
    value: { type: String },
  };

  constructor() {
    super();
    this.type = "text";
    this.placeholder = "";
    this.value = "";
  }

  render() {
    return html`
      <input
        class="input-field"
        type="${this.type}"
        placeholder="${this.placeholder}"
        .value="${this.value}"
        @input="${this._onInput}"
      />
    `;
  }

  _onInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("input-change", { detail: { value: this.value } })
    );
  }
}

customElements.define("input-field", InputField);
