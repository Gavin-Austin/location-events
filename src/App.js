import React from 'react';
import {
    BrowserRouter as Router,
    Route} from 'react-router-dom';

//Components
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import About from './components/pages/about';

//Includes
import './assets/css/default.min.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <Route exact path={'/'} component={Homepage} />
                <Route exact path={'/About'} component={About} />
                <Footer/>
            </div>
        </Router>
    )
}

export default App;
