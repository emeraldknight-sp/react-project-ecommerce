import { useHistory } from "react-router-dom";
import { StyledNav } from "./styles";
// import { BsCart4 } from "react-icons/bs";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ProductList from "../../components/ProductList";
import Footer from "../../components/Footer";

const Homepage = () => {

  // eslint-disable-next-line no-unused-vars
  const history = useHistory();

  return (
    <>
      <Header />
      <Main>
        <StyledNav>
          {/* <h1>Hello, sou sua homepage! :D</h1>
          <button onClick={() => history.push("/cart")}> <BsCart4 size={20}/></button> */}
        </StyledNav>
        <ProductList type="vitrine" />
      </Main>
      <Footer />
    </>
  )
}

export default Homepage;