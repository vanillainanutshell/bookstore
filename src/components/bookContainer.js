import ItemBook from './book';
import Form from './form';

const Books = () => {
  const bookList = useSelector((state) => state.booksReducer);
  return (
    <section>
      <section>
        {
          bookList.map((book) => (
            <ItemBook
              key={book.id}
              id={book.id}
              title={book.title}
              author={book.author}
              categories={book.categories}
            />
          ))
        }
      </section>
      <Form />
    </section>
  );
};

export default Books;
