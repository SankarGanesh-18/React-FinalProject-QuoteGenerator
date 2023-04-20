import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import QuoteGenerator from './QuoteGenerator';
import Favourites from './Favourites';
import Footer from './Footer';
// import About from './About';
// import Contact from './Contact';
import './App.css';

function App() {
  return (
      <Router>
        
    <Navbar className='navbar' bg="g" expand="lg">
  <Navbar.Brand href="/" className="nav-link"><h1>Quotopia</h1></Navbar.Brand>

    <Nav className="topnav-right">
      <Nav.Link as={NavLink} exact to="/" className="nav-link" style={{fontSize:'25px'}}>Home</Nav.Link>
      <Nav.Link as={NavLink} to="/favourites" className="nav-link" style={{fontSize:'25px'}}>Favourites</Nav.Link>
    </Nav>

</Navbar>


      <Routes>
        <Route exact path="/" element={<QuoteGenerator/>} />
        <Route path="/favourites" element={<Favourites />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
