import NewsList from './components/NewsList';
import { ThemeProvider, Container } from 'react-bootstrap';

const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm']}
    >
      <Container>
        <h1 className="text-center">Hacker News</h1>
        <NewsList />
      </Container>
    </ThemeProvider>
  );
}

export default App;
