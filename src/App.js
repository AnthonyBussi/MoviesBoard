import Home from './views/Home';
import Edit from './views/Edit';
import Add from './views/Add';
import Header from './components/Header';
import Footer from './components/Footer';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Movie from './views/Movie';

function App() {
  return (    
    <BrowserRouter>
    <Header />
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='/ajouter' element={<Add />} />
            <Route path='/movies/:id' element={<Movie />} />
        </Routes>
    <Footer />
    </BrowserRouter>
  );
}

export default App;