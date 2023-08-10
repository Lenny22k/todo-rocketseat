import styled from "styled-components";

export const ContainerTask = styled.main `

  width: 700px;
  margin: 0 auto;
  margin-top: 6rem;


  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.6rem;

    span {
      display: flex;
      gap: 0.6rem;
      align-items: center;
      font-size: 0.95rem;
      color: ${props => props.theme.blue};

      strong {
        background: ${props => props.theme["gray-600"]};
        color: ${props => props.theme["gray-300"]};

        font-size: 0.9rem;
        padding: 2px 0.5rem;
        border-radius: 8px;
      }
    }
  }

  section {
    display: flex;
    flex-direction: column;
  }

`