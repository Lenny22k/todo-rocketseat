import styled from "styled-components";


export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  margin: -1.5rem auto;
  gap: 0.5rem;

  input {
    flex: 1;
    padding: 1rem;
    height: 2.8rem;
    border-radius: 6px;
    color: #fff;

    border: 1px solid ${props => props.theme["gray-900"]};
    background: ${props => props.theme["gray-800"]};


  }

  button {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    height: 2.5rem;
    border: none;
    border-radius: 4px;
    border-radius: 6px;
    font-size: 0.8rem;
    padding: 1rem;
    cursor: pointer;

    background: ${props => props.theme["blue-dark"]};
    color: ${props => props.theme.white}

  }
`