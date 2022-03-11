import { useSelector } from 'react-redux';
import ItemBook from './book';
import Form from './form';
import './component.css';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <section className="book-list-container">
      <section className="book-list">
        {
          bookList.map((book) => (
            <ItemBook
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              category={book.category}
            />
          ))
        }
      </section>
      <Form />
    </section>
  );
};

export default Books;
