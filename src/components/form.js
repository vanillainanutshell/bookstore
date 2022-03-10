import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addElement } from '../redux/books/books';

const Form = () => {
  const initialFormState = {
    title: '', author: '', category: '',
  };

  const [formState, setFormState] = useState(initialFormState);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: [e.target.value],
    });
  };

  const dispatch = useDispatch();

  const submitBookToStore = (event) => {
    event.preventDefault();
    document.querySelector('form').reset();

    const newBook = {
      id: uuidv4(),
      title: formState.title[0],
      author: formState.author[0],
      category: formState.author[0],
    };

    dispatch(addElement(newBook));
  };

  return (
    <form onSubmit={submitBookToStore} className="form-container">
      <h1>ADD NEW BOOK</h1>
      <div className="form-inputs">
        <input name="title" type="text" onChange={handleChange} placeholder="Book Title" required />
        <input name="author" type="text" onChange={handleChange} placeholder="Book Author" required />
        <select name="category" id="categories" onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Category 1">Novel</option>
          <option value="Category 2">Historical Fictition</option>
          <option value="Category 3">SCI-FI</option>
        </select>
        <button type="submit">ADD BOOK</button>
      </div>
    </form>
  );
};

export default Form;