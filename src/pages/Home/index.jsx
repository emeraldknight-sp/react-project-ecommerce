// Hooks
import { useHistory } from "react-router-dom";

// Components
import Header from "../../components/Header";

// Styles
import { StyledContainer } from './styles';

const Homepage = () => {

  const history = useHistory();

  return (
    <>
      <Header />
      <StyledContainer>
        <h1>Hello, sou homepage! :D</h1>
        <button onClick={() => history.push("/cart")}>Carrinho</button>
      </StyledContainer>
    </>
  )
}

export default Homepage;