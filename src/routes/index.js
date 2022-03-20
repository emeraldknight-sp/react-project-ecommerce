import { Switch, Route } from "react-router-dom";
import Homepage from "../pages/Home";
import ShoppingCart from "../pages/shoppingCart";

const Routes = () => {

  console.log("Estou funcionando! ")
  
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