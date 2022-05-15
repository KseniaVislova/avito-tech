import {useDispatch, useSelector} from 'react-redux';
import { fetchNews } from '../asyncActions/fetchNews';
import { removeNews, selectNews } from '../actions/updateNews';
import dateFormat from "dateformat";
import { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, Card, Row, Col, Spinner } from 'react-bootstrap';
import { Link } from "react-router-dom";

const NewsList = () => {
  const dispatch = useDispatch();
  const news = useSelector(state => state.news.items);
  const [count, setCount] = useState(0);

  const goToNews = (id) => {
    const newItems = news.filter((item) => item.id === id);
    console.log(newItems)
    dispatch(selectNews(newItems[0]));
  }

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
      {news.length > 0 ? 
        <ListGroup variant="flush">
            {news.map(item => {
              return <ListGroupItem key={item.id} onClick={()=>{goToNews(item.id)}}>
                <Link to="/test" className="text-decoration-none">
                  <Card bg="success" text="white">
                    <Card.Header>{item.title}</Card.Header>
                    <Row>
                      <Col sm={4}>
                        <Card.Subtitle className="p-3">Автор: {item.by}</Card.Subtitle>
                      </Col>
                      <Col sm={3}>
                        <Card.Text className="p-3">Рейтинг: {item.score}</Card.Text>
                      </Col>
                      <Col sm={5}>
                        <Card.Text className="p-3">Дата: {dateFormat(new Date(item.time * 1000))}</Card.Text>
                      </Col>
                    </Row>
                  </Card>
                </Link>
                </ListGroupItem>
            })}
        </ListGroup> : 
        <Spinner animation="border" variant="success" />
      }
    </div>
  )

}

export default NewsList;