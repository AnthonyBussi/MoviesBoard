import Home from './views/Home';
import Edit from './views/Edit';
import Add from './views/Add';
// import Search from './views/Search';
// import Favorites from './views/Favorites';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (    
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/edit' element={<Edit />} />
            <Route path='/add' element={<Add />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;