import { HeaderNav } from './HeaderNav';
import { Logo } from '../Logo';
import { Container } from '../Container';

export const Header = () => (
  <header className="header">
    <Container className="header-container">
      <Logo />
      <HeaderNav />
    </Container>
  </header>
);
