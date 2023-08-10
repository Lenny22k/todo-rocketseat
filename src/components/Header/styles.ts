import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  padding: 4rem;
  font-size: 2.1rem;
  
  background: ${props => props.theme.black};
  
  strong {
    display: flex;
    align-items: center;
  }
  
`