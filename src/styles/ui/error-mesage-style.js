import { css } from "lit";

export const errorMessageStyles = css`
  #error-message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    height: 100%;
    color: #ff0000;
  }

  p {
    margin: 0;
    font-size: 0.8rem;
  }
`;
