import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      {/* Sidedrawer */}
      {/* Backdrop */}
      <main>
        <Switch>
          <Route exact path="/" component={HomeScreen}/>
          <Route exact path="/product/:id" component={ProductScreen}/>
          <Route exact path="/cart" component={CartScreen}/>
        </Switch>
      </main>

      {/* Home Screen */}

      {/* Product Screen */}

      {/* Card Screen */}
    </div>
  );
}

export default App;
