import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './context/Home';
import Navbar from './Components/Navbar';
import Favs from './context/Favs';
import Contact from './context/Contact';
import Detail from './context/Detail';
import Footer from './Components/Footer';
import { AppProvider } from './context/AppContext'; // Asegúrate de importar el proveedor correctamente
import './App.css';

const App = () => {
  return (
  <AppProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/details/:id' element={<Detail />} />
          <Route path='/favs' element={<Favs />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='*' element={() => <h1>Error Not Found</h1>} />
        </Routes>
        <div className="Footer">
          <Footer />
        </div>
  </AppProvider>  
  );
};

export default App;
