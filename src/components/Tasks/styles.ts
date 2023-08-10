import styled from "styled-components";


export const TasksContainer = styled.div `
  display: flex;
  flex-direction: column;
  
  span {
    font-size: 1.4rem;
    display: flex;
    justify-content: center;    
    color: ${props => props.theme['blue']}
  }
`

export const TaskItem = styled.div `
  display: flex;
  gap: 1rem;
  padding: 1.2rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  font-size: 1rem;
  color: ${props => props.theme["gray-100"]};

  input[type=checkbox] { 
    border-radius: 5px;
  }

  div {
    flex: 1;
    width: 100%;
  }

  strong {
    cursor: pointer;
  }

  background: ${props => props.theme["gray-500"]}
` 

