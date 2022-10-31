import "./App.css";
import Header from "./components/Header";
import ProductCard from "./components/ProductCard";
import products from "./data/Products";

let productLists = products.map((product) => {
  return <ProductCard data={product} key={product.id} />;
});

function App() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="row">{productLists}</div>
    </div>
  );
}

export default App;
