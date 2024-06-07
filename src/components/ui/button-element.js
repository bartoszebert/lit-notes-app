import { LitElement, html } from "lit";
import { defaultStyles } from "../../styles/default-style";
import { buttonStyles } from "../../styles/ui/button-element-style";

class ButtonElement extends LitElement {
  static styles = [defaultStyles, buttonStyles];

  static properties = {
    type: { type: String },
    label: { type: String },
    className: { type: String },
  };

  constructor() {
    super();
    this.type = "primary";
    this.label = "";
    this.className = "";
  }

  render() {
    return html`<button class="btn btn-${this.type} ${this.className}">
      <slot name="icon"></slot>
      ${this.label}
    </button>`;
  }
}

customElements.define("button-element", ButtonElement);
