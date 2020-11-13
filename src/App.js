import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { Header } from './components/';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    axios.get('http://localhost:3002/db.json').then(({ data }) => {
      dispatch(setPizzas(data.pizzas));
    });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content"></div>
      <Route path="/" component={Home} exact />
      <Route path="/cart" component={Cart} exact />
    </div>
  );
}

export default App;
