import { BooksOnVitrineProvider } from "./BooksOnVitrine";
import { ProductsOnCartProvider } from "./BookOnCart";

const Providers = ({ children }) => {
  return (
    <ProductsOnCartProvider>
      <BooksOnVitrineProvider>
        { children }
      </BooksOnVitrineProvider>
    </ProductsOnCartProvider>
  )
}

export default Providers;