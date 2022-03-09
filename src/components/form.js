import React from 'react';

const Form = () => (
  <div className="form-container">
    <h1>Add new book</h1>
    <div className="form-inputs">
      <input type="text" placeholder="Book title" />
      <select name="categories" id="categories">
        <option value="Category 1">Novel</option>
        <option value="Category 2">Historical Ficticion</option>
        <option value="Category 3">Fantasy</option>
      </select>
      <button type="button">Add book</button>
    </div>
  </div>
);

export default Form;
