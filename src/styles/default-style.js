import { css } from "lit";

export const defaultStyles = css`
  * {
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
  }

  h1 {
    font-size: 1.25rem;
    font-weight: 500;
    margin: 0;
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 0.875rem;
    margin: 0;
    font-weight: 500;
  }

  p {
    font-weight: 400;
    color: var(--dark-secondary);
    line-height: 1.5;
    margin-top: 0.5rem;
  }
`;
