import React from 'react'
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Static/Header';
import Home from './Components/Homepage/Home';
import Footer from './Components/Static/Footer';
function App() {
  return (
    <>
    <Header/>
    <Home/>
    <Footer/>
    </>
  )
}

export default App