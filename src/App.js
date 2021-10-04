import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Courses from './Components/Services/Services';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/'>
              <Home />
          </Route>
          <Route exact path='/home'>
              <Home />
          </Route>
          <Route exact path='/about'>
              <About />
          </Route>
          <Route exact path='/courses'>
              <Courses />
          </Route>
          <Route exact path='/contact'>
              <Contact />
          </Route>
          <Route exact path='/notfound'>
              <Contact />
          </Route>
          <Route path='*'>
              <Notfound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
