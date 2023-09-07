import { ProductList } from "../../components/ProductList";
import { AiOutlineLeft } from "react-icons/ai";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main";

import { StyledNav } from "../Home/Home.style";

export const ShoppingCart = () => {
  return (
    <>
      <Header />
      <Main>
        <StyledNav>
          <h1>Hello, sou o seu carrinho de compras! :D</h1>
          <button onClick={() => console.log("/")}>
            <AiOutlineLeft size={20} />
          </button>
        </StyledNav>
        <ProductList />
      </Main>
    </>
  );
};
