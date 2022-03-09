import React from 'react';
import PropTypes from 'prop-types';

const ItemBook = (props) => {
  const { title, author, categories } = props;
  return (
    <div>
      <div>
        <div>
          <span>{categories}</span>
          <h2>{title}</h2>
          <h3>{author}</h3>
        </div>
        <div>
          <button type="button">Comments</button>
          <button type="button">Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div>
        <div>
          <span>33%</span>
          <span>Completed</span>
        </div>
        <div>
          <span>Current chapter</span>
          <span>Chapter 12</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    </div>
  );
};

ItemBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  categories: PropTypes.string.isRequired,
};

export default ItemBook;
