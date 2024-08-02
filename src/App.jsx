// App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ItemsProvider } from './items';
import { Navbar } from './Navbar';
import { CartItem } from './Cart';
import Allitems from './Allitems';

function App() {
  return (
    <ItemsProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/cart" element={<CartItem />} />
          <Route path="/" element={<Allitems />} />
        </Routes>
      </Router>
    </ItemsProvider>
  );
}

export default App;
