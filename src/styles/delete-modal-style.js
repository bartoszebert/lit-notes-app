import { css } from "lit";

export const deleteModaStyles = css`
  .modal {
    margin: 0;
    padding: 1rem;
    top: 0;
    position: fixed;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    background: var(--white);
    width: 100%;
    padding: 2rem;
    border-radius: 0.75rem;
  }

  .modal-actions {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  @media (min-width: 600px) {
    .modal-content {
      width: 600px;
    }
  }
`;
