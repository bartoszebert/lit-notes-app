import { LitElement, html } from "lit";
import { errorMessageStyles } from "../../styles/ui/error-mesage-style";

class ErrorMessage extends LitElement {
  static styles = errorMessageStyles;

  static properties = {
    message: { type: String },
    visible: { type: Boolean },
  };

  constructor() {
    super();
    this.message = "";
    this.visible = false;
  }

  render() {
    return html`
      ${this.visible
        ? html` <div id="error-message">
            <p>${this.message}</p>
          </div>`
        : ""}
    `;
  }
}

customElements.define("error-message", ErrorMessage);
