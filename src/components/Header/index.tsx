import { Rocket } from 'phosphor-react'
import { HeaderContainer } from './styles'
import logo from '../../assets/Logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <strong>
        <img src={logo} alt="todo-logo" />
      </strong>
    </HeaderContainer>
  )
}
