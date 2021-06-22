import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Home from './pages/Home'
import Navbar from './components/Navbar'

import './App.css';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Navbar />
      <main>
        <Switch>
          {/* Home */} 
          <Route to='/' component={Home} />
        </Switch>
      </main>
    </Router>
    
  );
  
}

export default App;
