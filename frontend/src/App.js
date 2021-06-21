import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';

import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/"  />
          <Route exact path="/product/:id"/>
          <Route exact path="/cart"/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
