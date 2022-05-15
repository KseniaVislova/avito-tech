import {useDispatch, useSelector} from 'react-redux';
import { Link } from "react-router-dom";

const News = () => {
  const selectNews = useSelector(state => state.news.selectNews);

  return (
    <div>
      <div>{selectNews.title}</div>
      <div>{selectNews.text}</div>
      <Link to="/">Обратно к новостям</Link>
    </div>
  )
}

export default News;