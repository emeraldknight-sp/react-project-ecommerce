
import { useHistory } from 'react-router-dom';

const ShoppingCart = () => {

  const history = useHistory();

  return (
    <>
      <h1>Hello, sou o carrinho de compras! :D</h1>
      <button onClick={() => history.push("/")}>Voltar</button>
    </>
  )
}

export default ShoppingCart;