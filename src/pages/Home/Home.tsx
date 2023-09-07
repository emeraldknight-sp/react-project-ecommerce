import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Main } from "../../components/Main/";
import { ProductList } from "../../components/ProductList";

import { StyledNav } from "./Home.style";

export const Home = () => {
  return (
    <>
      <Header />
      <Main>
        <StyledNav></StyledNav>
        <ProductList />
      </Main>
      <Footer />
    </>
  );
};
