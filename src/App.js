import {useDispatch} from 'react-redux';
import NewsList from './components/NewsList';
import News from './components/News';
import { fetchNews } from './asyncActions/fetchNews';
import { removeNews} from './actions/updateNews';
import { ThemeProvider, Container, Button } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";;

const App = () => {
  const dispatch = useDispatch();

  const updateNews = () => {
    dispatch(removeNews());
    dispatch(fetchNews())
  }

  return (
    <ThemeProvider
      breakpoints={['xxl', 'xl', 'lg', 'md', 'sm']}
    >
      <Container>
        <h1 className="text-center">Hacker News</h1>
        <Button variant="outline-success" onClick={updateNews}>Update news</Button>
        <Router>
          <Route path="/" exact component={NewsList} />
          <Route path="/test" component={News} />
        </Router>
      </Container>
    </ThemeProvider>
  );
}

export default App;
