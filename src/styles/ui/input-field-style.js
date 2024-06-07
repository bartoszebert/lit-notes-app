import { css } from "lit";

export const inputFieldStyles = css`
  .input-field {
    width: 100%;
    background-color: var(--input-default-bg);
    border-radius: 12px;
    border: 1px solid var(--input-default-bg);
    font-size: 1rem;
    font-weight: 400;
    color: var(--light);
    padding: 0.7rem;
  }

  .input-field:hover {
    background-color: var(--input-hover-bg);
  }

  .input-field:focus {
    background-color: var(--white);
    border: 1px solid var(--dark);
  }
  
  input:active,
  input:focus {
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    outline: none;
  }
`;
