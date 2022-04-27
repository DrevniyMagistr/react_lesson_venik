import { Container } from './Container';

const FRUITS = ['apple', 'kiwi', 'banana', 'cucumber'];

export const Home = () => {
  const isDartMode = window.matchMedia('prefers-color-scheme: dark').matches;
  const theme = isDartMode ? 'dark' : 'light';

  return (
    <main className="main">
      <Container>
        <h1>This is {theme} mode</h1>
        <h2>Fruits</h2>
        <ul>
          {FRUITS.map((name, index) => {
            return <li key={index}>{name}</li>;
          })}
        </ul>
      </Container>
    </main>
  );
};
