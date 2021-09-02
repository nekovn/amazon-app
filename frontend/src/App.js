import "./App.css";
import data from "./data";
import Product from "./components/Product";

function App() {
  return (
    <div class="grid-container">
      <header class="row">
        <div>
          <a class="brand" href="index.html">
            amazona
          </a>
        </div>
        <div>
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <main>
        <div>
          <div class="row center">
            {data.products.map((product) => (
              <Product key={product._id} product={product}/>
            ))}
          </div>
        </div>
      </main>
      <footer class="row center">All right reserved</footer>
    </div>
  );
}

export default App;
