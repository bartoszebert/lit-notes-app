import { css } from "lit";

export const appStyles = css`
  header,
  main,
  section {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 0 auto;
    gap: 1.25rem;
  }

  header {
    flex-direction: row;
    gap: 0.625rem;
    margin: 0.5rem 0;
    padding: 1rem;
    align-items: center;
  }

  main {
    padding: 1rem;
  }

  @media (min-width: 600px) {
    header,
    main {
      width: 600px;
    }

    header {
      margin: 0.5rem auto;
    }
  }
`;
