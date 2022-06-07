import './App.css';
import { useState, useEffect } from 'react';
import products from './components/Products.json'
import Product from './components/Product';
import Header from './components/Header'
import Basket from './components/Basket'
import './components/style.css'


function App() {


  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState();

  
  useEffect(() => {
    setTotal(basket.reduce((arr, item) => {
      return arr + item.amount * (products.find(pro => pro.id === item.id).price);
    }, 0))


  }, [basket])

  const resetBasket = () => {
    setBasket([]);
  }


  return (
    <div className="App">
      <Header money={money} total={total} />
      <div className='main-container'>
        {products.map((item, idx) =>
          <Product key={idx} product={item} setBasket={setBasket} basket={basket} total={total} money={money} />
        )}
      </div>
      <Basket basket={basket} total={total}/>
      <button onClick={resetBasket}>Hepsini sil</button>
    </div>
  );
}

export default App;
