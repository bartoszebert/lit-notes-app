import { LitElement, html } from "lit";
import { defaultStyles } from "../../styles/default-style";
import { textAreaFieldStyles } from "../../styles/ui/text-area-field-style";

class TextareaField extends LitElement {
  static styles = [defaultStyles, textAreaFieldStyles];

  static properties = {
    placeholder: { type: String },
    value: { type: String },
  };

  constructor() {
    super();
    this.placeholder = "";
    this.value = "";
  }

  render() {
    return html`
      <div class="textarea-wrapper">
        <textarea
          placeholder="${this.placeholder}"
          .value="${this.value}"
          @input="${this._onInput}"
        ></textarea>
        <slot></slot>
      </div>
    `;
  }

  _onInput(e) {
    this.value = e.target.value;
    this.dispatchEvent(
      new CustomEvent("input-change", { detail: { value: this.value } })
    );
  }
}

customElements.define("textarea-field", TextareaField);
