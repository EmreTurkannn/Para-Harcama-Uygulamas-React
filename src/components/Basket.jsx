import React from 'react'
import BasketList from './BasketList'

const Basket=({basket,total})=>{
    return(
        <div className='basket-container'>
            {basket.map((item,idx)=>
            <BasketList key={idx} item={item} total={total}/>
            )}
            <div className='total'>{total}</div>
        </div>  
    )
}

export default Basket;