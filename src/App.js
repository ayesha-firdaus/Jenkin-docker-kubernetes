import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Menu from "./components/Menu/Menu";
import PizzaComponent from "./components/Pizza/PizzaComponent/PizzaComponent";
import PizzaList from "./components/Pizza/PizzaList/PizzaList";
function App() {
  return (
    <div className="container" >
<Header />

<Menu />
<PizzaList />
<Footer />
    </div>
  );
}

export default App;
