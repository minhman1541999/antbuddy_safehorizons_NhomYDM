import SignIn from "./admin/SignIn";
import Dashboard from "./admin/Dashboard";
import Customers from "./admin/customers/Customers";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./admin/Layout";
import DetailsCustomer from "./admin/customers/Details";
import Home from "./client/Home";
import ProductDetail from "./client/ProductDetail";
import Products from "./admin/products/Products";
import DetailsProduct from "./admin/products/Details";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/home/product/:id' component={ProductDetail} />

        {/* Admin */}
        <Route exact path='/' component={() => Layout({ layout: <Dashboard />, layoutName: 'Dashboard' })} />
        {/* Customers */}
        <Route exact path='/customers' component={() => Layout({ layout: <Customers />, layoutName: 'Customers' })} />
        <Route exact path='/customers/new' component={() => Layout({ layout: <DetailsCustomer />, layoutName: 'New Customer' })} />
        <Route exact path='/customers/:id' component={() => Layout({ layout: <DetailsCustomer />, layoutName: 'Customer Details' })} />
        {/* Products */}
        <Route exact path='/products' component={() => Layout({ layout: <Products />, layoutName: 'Products' })} />
        <Route exact path='/products/new' component={() => Layout({ layout: <DetailsProduct />, layoutName: 'New Product' })} />
        <Route exact path='/products/:id' component={() => Layout({ layout: <DetailsProduct />, layoutName: 'Product Details' })} />
        <Route exact path='/signin' component={SignIn} />
      </Switch>
    </Router>
  );
}

export default App;
