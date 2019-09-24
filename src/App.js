import React from 'react';

//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';

//Includes
import './assets/css/default.min.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <Homepage/>
        <Footer/>
    </div>
  )
}

export default App;
