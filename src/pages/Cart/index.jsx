
import { useHistory } from 'react-router-dom';
import { StyledNav } from '../Home/styles';
import { AiOutlineLeft } from "react-icons/ai";
import Header from '../../components/Header';
import Main from '../../components/Main';
import ProductList from '../../components/ProductList';

const ShoppingCart = () => {

  const history = useHistory();

  return (
    <>
      <Header />
      <Main>
        <StyledNav>
          <h1>Hello, sou o seu carrinho de compras! :D</h1>
          <button onClick={() => history.push("/")}><AiOutlineLeft size={20}/></button>
        </StyledNav>
        <ProductList type="cart" />
      </Main>
    </>
  )
}

export default ShoppingCart;