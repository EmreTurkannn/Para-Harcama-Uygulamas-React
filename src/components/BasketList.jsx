import React from 'react'


const BasketList=({item,total})=>{

    return(
        <div className='last-list'>
            <div className='item-info'>
            {item.title}   
            {item.amount}  x  {item.price}
            </div>
        </div>
        
    )
}

export default BasketList;