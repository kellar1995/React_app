import logo from './logo.svg';
import { Route } from 'react-router-dom'
import Header from './components/Header';
import Home from './views/Home';
import Products from './views/Products';
import Cart from './views/Cart';
import Signin from './views/Signin';

function App() {
  return (
    <div className="bg-dark text-center text-light">
        <Header />
        <div>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path ='/products'>
            <Products />
          </Route>
          <Route exact path = '/cart'>
            <Cart />
          </Route>
          <Route exact path = '/signin'>
            <Signin />
          </Route>
        </div>
    </div>
  );
}

export default App;
