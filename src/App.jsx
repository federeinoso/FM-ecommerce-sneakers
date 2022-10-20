import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import CartDetailsProvider from "./context/useCartDetails";

const App = () => {
  return (
    <CartDetailsProvider>
      <Header />
      <Main />
    </CartDetailsProvider>
  );
};

export default App;
