import Footer from "./Components/footer/Footer";
import Header from "./Components/header/Header";
import Home from "./Components/home/Home";
import LastNews from "./Components/lastNews/LastNews";
import PapularProducts from "./Components/papularProducts/PapularProducts";
import ProductCategory from "./Components/productCategory/ProductCategory";
function App() {

  const handelClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="app">
      <Header />
      <Home />
      <PapularProducts />
      <ProductCategory />
      <LastNews />
      <Footer />
      <button className="top" onClick={handelClick}>
        <i class="fa-solid fa-jet-fighter-up"></i>
      </button>
    </div>
  );
}

export default App;
