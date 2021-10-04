import './App.css';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import About from './components/About/About';
import Service from './components/Service/Service';
import NotFound from './components/NotFound/NotFound';
import Details from './components/Details/Details';

function App() {
  return (
    <div className="">
      <Router>
        <Header></Header>
        <Switch>
          {/* home page route */}
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* about page route */}
          <Route exact path="/about">
            <About></About>
          </Route>
          {/* service page route */}
          <Route exact path="/service">
            <Service></Service>
          </Route>
          {/* details page route */}
          <Route exact path="/details">
            <Details></Details>
          </Route>
          {/* not found page route */}
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
