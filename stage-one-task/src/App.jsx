import "./assets/css/style.css";
import { Footer, Header, ProductCard } from "./components";
import products from "./data/Products";

function App() {
  const productLists = products.map((product) => {
    return <ProductCard data={product} key={product.id} />;
  });
  return (
    <div>
      <div className="container">
        <Header />

        <div className="row">{productLists}</div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
