import { useEffect, useState } from "react";
import "./App.css";
import Cart from "./Components/Cart/Cart";
import Countries from "./Components/Countries/Countries";

function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleAddCountry = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };

  return (
    <div className="App">
      <h2>Country Loaded:{countries.length} </h2>
      <h2>Country Added:{cart.length} </h2>
      <Cart cart={cart}></Cart>
      {countries.map((country) => (
        <Countries
          handleAddCountry={handleAddCountry}
          country={country}
          key={country.alpha3Code}
        ></Countries>
      ))}
    </div>
  );
}

export default App;
