import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { Header } from './components/';
import { Home, Cart } from './pages';
import { setPizzas } from './redux/actions/pizzas';
import store from './redux/store';

// function App() {

//   useEffect(() => {
// axios.get('http://localhost:3000/db.json').then(({ data }) => {
//   setPizzas(data.pizzas);
// });
//   }, []);
class App extends React.Component {
  componentDidMount() {
    axios.get('http://localhost:3000/db.json').then(({ data }) => {
      this.props.dispatch(setPizzas(data.pizzas));
    });
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <div className="content"></div>
        <Route path="/" render={() => <Home items={this.props.items} />} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.pizzas.items,
  };
};

export default connect(mapStateToProps)(App);
