import { css } from "lit";

export const textAreaFieldStyles = css`
  .textarea-wrapper {
    position: relative;
    resize: both;
    overflow: auto;
    max-width: 100%;
    height: 160px;
  }

  .textarea-wrapper:after {
    content: "";
    position: absolute;
    bottom: 5px;
    right: 5px;
    width: 15px;
    height: 15px;
    background-image: url("./icons/expand.svg");
    background-repeat: no-repeat;
    background-size: contain;
    z-index: 2;
  }

  textarea {
    width: 100%;
    height: 100%;
    position: absolute;
    background-color: var(--input-default-bg);
    border-radius: 0.75rem;
    border: 1px solid var(--input-default-bg);
    font-size: 1rem;
    font-weight: 400;
    color: var(--light);
    padding: 0.7rem;
    resize: none;
    font-family: "Inter", sans-serif;
  }

  textarea:hover {
    background-color: var(--input-hover-bg);
  }

  textarea:focus {
    background-color: var(--white);
    border: 1px solid var(--dark);
  }

  textarea:active,
  textarea:focus {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    outline: none;
  }

  textarea::-webkit-resizer,
  .textarea-wrapper::-webkit-resizer {
    display: none;
  }
`;
