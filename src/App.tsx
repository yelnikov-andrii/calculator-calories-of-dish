/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import './App.css';
import { Main } from './components/Main/Main';
import { Header } from './components/Header/Header';
import { getProductsFromLocalStorage } from './helpers/saveDataToLocaleStorage';
import { useDispatch } from 'react-redux';
import { getProducts } from './store/productsSlice';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
  const str: any = getProductsFromLocalStorage();
  dispatch(getProducts(JSON.parse(str)))
  }, []);
  
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
