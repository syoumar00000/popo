import './App.css';
import {BrowserRouter ,Route, Switch} from 'react-router-dom';
import Menu from './components/Menu';
import Home from './components/Home';
import About from './components/About';
import Photo from './components/Photo';
import Event from './components/Event';
import ErrorPage from './components/ErrorPage';

function App() {
  return (
    <BrowserRouter >
      <Menu />
      <Switch>
      <Route  exact path = "/home" component ={Home} />
      <Route path = "/about" component ={About} />
      <Route path = "/photo" component ={Photo} />
      <Route path = "/event" component ={Event} />
      <Route component ={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
