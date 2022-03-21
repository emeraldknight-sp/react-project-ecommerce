import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Home";
import ShoppingCart from "../pages/Cart";

const Routes = () => {

  return(
    <Switch>

      <Route exact path="/">
        <Homepage />
      </Route>

      <Route exact path="/cart">
        <ShoppingCart />
      </Route>

    </Switch>
  )
}

export default Routes;