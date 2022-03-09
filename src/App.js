import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Books from './components/bookContainer';
import NavBar from './components/navbar';
import Construc from './components/underConstruction';

const App = () => (
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="/categories" element={<Construc />} />
    </Routes>
  </Router>
);

export default App;
