# Интерфейс для сайта Hacker News

## Продуктовые требования

### Главная страница

* Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
* Каждая новость содержит:
  * название
  * рейтинг
* ник автора
* дату публикации
* По клику на новость происходит переход на страницу новости
* Список новостей должен автоматически обновляться раз в минуту без участия пользователя
* На странице должна быть кнопка для принудительного обновления списка новостей

### Страница новости

* Должна содержать:
  * ссылку на новость
  * заголовок новости
  * дату
  * автора
  * счётчик количества комментариев
  * список комментариев в виде дерева
* Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой.
* Список комментариев должен автоматически обновляться раз в минуту без участия пользователя
* На странице должна быть кнопка для принудительного обновления списка комментариев
* На странице должна быть кнопка для возврата к списку новостей

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

