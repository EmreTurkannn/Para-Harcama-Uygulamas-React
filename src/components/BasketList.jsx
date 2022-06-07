import React from 'react'


const BasketList=({item,total})=>{
    console.log(item);
    return(
        <div className='last-list'>
            <div className="img-list">
            <img src={item.img} alt=""/>
            </div>
            <div className='item-info'>
            {item.title}-   
            {item.amount }  x  { item.price} TL   
    
            </div>
        </div>
        
    )
}

export default BasketList;