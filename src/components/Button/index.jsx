/* eslint-disable no-unused-vars */
import { useContext } from "react";
import { BooksOnVitrineContext } from "../../providers/BooksOnVitrine";
import { ProductsOnCartContext } from "../../providers/BookOnCart/index";
import { StyledButton } from "./styles";
import { BsCartPlus, BsCartX } from "react-icons/bs";

const Button = ({ type, item }) => {
  const { books, addToBooksOnVitrine, removeFromBooksOnVitrine } = useContext(
    BooksOnVitrineContext
  );
  const { cart, addProductOnCart, removeProductFromCart } = useContext(
    ProductsOnCartContext
  );

  const text = type === "vitrine" ? "Adicionar" : "Remover";

  const handleClick = () => {
    type === "vitrine" ? addProductOnCart(item) : removeProductFromCart(item);
  };

  return <StyledButton color={text} onClick={handleClick}> { text === "Adicionar" ? <BsCartPlus /> : <BsCartX /> } { text}</StyledButton>;
};

export default Button;
