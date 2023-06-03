import "./App.css";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Auth from "./pages/Auth";
import Success from "./pages/Success";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      {" "}
      <Box bg="white" height="100vh">
        <Switch>
          <Route path="/auth">{user ? <Redirect to="/auth" /> : <Auth />}</Route>
          <Route exact path="/">
            {user ? <Home /> : <Redirect to="/auth" />}
          </Route>
          <Route path="/productlist">
           <ProductList/>
          </Route>
          <Route path="/product/:id">
            {user ? <Product /> : <Redirect to="/auth" />}
          </Route>
          <Route path="/cart">{user ? <Cart /> : <Redirect to="/auth" />}</Route>
          <Route path="/success">
            {user ? <Success /> : <Redirect to="/auth" />}
          </Route>
        </Switch>
      </Box>
    </Router>
  );
};

export default App;
