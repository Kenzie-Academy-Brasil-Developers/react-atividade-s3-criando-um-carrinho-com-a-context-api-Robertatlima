import ProductList from "./components/product-list/index";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import "./App.css";

function App() {
  return (
    <CatalogueProvider>
      <CartProvider>
        <ProductList type="catalogue" />
        <ProductList type="cart" />
      </CartProvider>
    </CatalogueProvider>
  );
}

export default App;
