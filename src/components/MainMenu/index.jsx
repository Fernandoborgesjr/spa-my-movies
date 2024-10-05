import { Link } from 'react-router-dom'
import { MainNavContainer } from '../styled/MainNavContainer'

export const MainMenu = () => (
  <MainNavContainer>
    <ul>
      <li>
        <Link to="/">Início</Link>
      </li>
      <li>
        <Link to="/about">Sobre</Link>
      </li>
    </ul>
  </MainNavContainer>
)
