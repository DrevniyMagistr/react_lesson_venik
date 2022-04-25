import { Container } from './Container';

export const Home = () => {
  const isDartMode = window.matchMedia('prefers-color-scheme: dark').matches;
  const theme = isDartMode ? 'dark' : 'light';
  return (
    <main className="main">
      <Container>
        <h1>This is {theme} mode</h1>
      </Container>
    </main>
  );
};
