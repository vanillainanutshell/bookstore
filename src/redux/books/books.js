const addBook = 'bookStore/books/addBook';
const removeBook = 'bookStore/books/removeBook';
const GET_BOOK = 'bookStore/books/GET_BOOK';
const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/9mnEjfN2szC6830jOdSC/books';

const initialState = [];
const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case addBook:
      return [...state, action.payload];
    case removeBook:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK:
      return [...state, action.payload];
    default:
      return state;
  }
};

export const addElement = (payload) => ({
  type: addBook,
  payload,
});

export const removeElement = (id) => ({
  type: removeBook,
  id,
});

export const deleteBook = (id) => (
  async (dispatch) => {
    const response = await fetch(`${url}/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({
        item_id: id,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    if (response.status === 201) {
      dispatch(removeElement(id));
    }
  }
);
export const sentBook = (payload) => (
  async (dispatch) => {
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        item_id: payload.id,
        title: {
          bookTitle: payload.title,
          bookAuthor: payload.author,
        },
        category: payload.category,
      }),
      headers: {
        'Content-type': 'application/JSON',
      },
    });
    dispatch(addElement(payload));
  }
);
export const getBook = async (dispatch) => {
  const response = await fetch(url);
  const data = await response.json();
  const book = Object.entries(data);
  book.forEach((item) => {
    const [id, value] = item;
    const { title, category } = value[0];
    const { bookTitle, bookAuthor } = title;

    const newBook = {
      id,
      title: bookTitle,
      author: bookAuthor,
      category,
    };
    dispatch(addElement(newBook));
  });
};
export default booksReducer;
