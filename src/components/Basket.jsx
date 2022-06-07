import React from 'react'
import BasketList from './BasketList'

const Basket=({basket,total,setBasket})=>{
    const resetBasket = () => {
        setBasket([]);
      }
    return(
        <div className='main-cont'>
            <div className="basket-header">
                Sepetim
            </div>
            <div className="basket-out">
        <div className='basket-container'>
            {basket.map((item,idx)=>
            <BasketList key={idx} item={item} total={total} setBasket={setBasket}/>
            )}
           
        </div>
         <div className='total'>Toplam Tutar {total} TL    
         <div className="btn-sil">
         <button disabled={!basket} onClick={resetBasket}>Hepsini sil</button>
         </div> 
         </div> 
         
         </div>
         </div>
    )
}

export default Basket;