import React from 'react';
import './App.css';
//  import Button  from 'react-bootstrap/Button';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import Header from './components/views/Header';
 import Footer from './components/views/Footer';


function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <Header/>
      <Footer/>
    </div>
  );
}

export default App;
