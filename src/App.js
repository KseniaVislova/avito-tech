import NewsList from './components/NewsList';
import News from './components/News';
import { ThemeProvider, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => {
  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm']}
    >
      <Container>
        <h1 className="text-center">Hacker News</h1>
        <Router>
          <Route path="/" exact component={NewsList} />
          <Route path="/test" component={News} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
