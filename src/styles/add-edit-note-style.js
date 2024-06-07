import { css } from "lit";

export const addEditStyles = css`
  .add-edit-note-form {
    flex-direction: column;
    gap: 0.8rem;
    box-shadow: 0px 0px 16px 0px #00000014;
    margin: 0 -1rem;
    padding: 0.5rem 1rem 1rem;
    border-radius: 12px;
    background-color: var(--white);
  }

  .add-note-title {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
