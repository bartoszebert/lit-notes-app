import { css } from "lit-element";

export const buttonStyles = css`
  :host {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    width: 100%;
  }

  .btn {
    background: transparent;
    border: none;
    border-radius: 0.75rem;
    font-size: 1rem;
    height: 40px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.2px;
  }

  .btn-primary {
    background-color: var(--primary-bg);
    color: var(--white);
  }

  .btn-primary:hover {
    background-color: var(--primary-hover-bg);
  }

  .btn-primary:active {
    background-color: var(--primary-active-bg);
  }

  .btn-secondary {
    background-color: var(--white);
    color: var(--dark);
    border: 1px solid var(--secondary-border);
  }

  .btn-secondary:hover {
    background-color: var(--secondary-hover-bg);
  }

  .btn-secondary:active {
    background-color: var(--secondary-active-bg);
  }

  button:active {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    outline: none;
  }

  .btn-secondary-add {
    background-image: url("./icons/addNote.svg");
    background-repeat: no-repeat;
    background-position: 15px 10px;
    padding: 0.7rem 2rem 0.7rem 3rem;
  }

  .btn-cancel {
    color: var(--cancel-color);
    font-size: 0.875rem;
    font-weight: 500;
    padding: 0.5rem;
    align-self: flex-end;
  }

  .btn-cancel:hover,
  .btn-cancel:active {
    text-decoration: underline;
  }

  .btn-absolute-right {
    padding-left: 0.7rem;
    padding-right: 0.7rem;
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }

  .btn-action {
    padding: 0.2rem !important;
    margin: 0 !important;
    height: initial;
  }

  .btn-flex-1 {
    flex: 1;
  }

  .w-100 {
    width: 100%;
  }
`;
