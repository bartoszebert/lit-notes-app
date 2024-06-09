import { css } from "lit";

export const noteItemStyles = css`
  h3,
  p {
    overflow-wrap: break-word;
  }
  .note {
    display: flex;
    flex-direction: column;
    box-shadow: 0px 4px 12px 0px #00000012;
    border-radius: 0.75rem;
    padding: 0.5rem 1rem 1rem;
    background-color: var(--white);
  }

  .note .note-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .note .note-actions {
    display: flex;
    align-items: flex-end;
    gap: 0;
  }

  .note p {
    font-size: 0.875rem;
    color: var(--dark-secondary);
  }

  .note .note-date {
    font-size: 0.75rem;
    color: var(--light);
  }
`;
