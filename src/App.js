import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import Books from './components/bookContainer';
import NavBar from './components/navbar';
import Construc from './components/underConstruction';
import store from './redux/configureStore';

const App = () => (
  <Router>
    <Provider store={store}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/categories" element={<Construc />} />
      </Routes>
    </Provider>
  </Router>
);

export default App;
