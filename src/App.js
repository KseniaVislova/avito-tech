import {useDispatch, useSelector} from 'react-redux';
import { fetchNews } from './asyncActions/fetchNews';
import { removeNews } from './actions/updateNews';
import dateFormat from "dateformat";
import { useEffect, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.items);
  const [count, setCount] = useState(0);

  console.log(count)

  const updateNews = () => {
    dispatch(removeNews());
    dispatch(fetchNews());
  }

  console.log(news);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 60000)
  }, [news])

  useEffect(() => {
    dispatch(removeNews());
    setTimeout(() => dispatch(fetchNews()), 0);
  }, [count])

  return (
    <div>
      <h1>Hacker News</h1>
      <div>
        {news.length > 0 ? 
          <ul>
            {news.map(item => {
              return <li key={item.id}>
                  <h3>{item.title}</h3>
                  <div>Автор: {item.by}</div>
                  <div>Рейтинг: {item.score}</div>
                  <div>Дата и время публикации: {dateFormat(new Date(item.time * 1000))}</div>
                </li>
            })}
          </ul> : 
          <div>Новости не загружены</div>
      }
      </div>
    </div>
  );
}

export default App;
