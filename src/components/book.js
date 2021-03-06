import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';
import './component.css';
import progress from '../assets/progress.png';

const ItemBook = (props) => {
  const dispatch = useDispatch();

  const {
    id, title, author, category,
  } = props;

  const handleRemoveBook = () => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="book-container">
      <div className="block-1">
        <div className="info">
          <span className="categories">{category}</span>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div className="btn-container">
          <button type="button">Comments</button>
          <button type="button" onClick={handleRemoveBook}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="block-2">
        <div className="stats">
          <figure>
            <img className="progress-circle" alt="progress-circle" src={progress} />
          </figure>
          <div className="progress-text">
            <span className="stat-number">33%</span>
            <span className="stat-text">Completed</span>
          </div>
        </div>
        <div className="progress-info-container">
          <div className="progress-info">
            <span className="chapter-title">CURRENT CHAPTER</span>
            <span className="chapter-number">Chapter 5</span>
          </div>
          <button className="btn-a-solid" type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

ItemBook.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default ItemBook;
