import React from 'react';


const Product=({product,basket,setBasket,total,money})=>{

    const basketItem=basket.find(item=>item.id===product.id);
    const addBasket=()=>{
        const checkbasket=basket.find(item=>item.id===product.id);
        if(checkbasket){
            checkbasket.amount+=1;
            setBasket([...(basket.filter(item=>item.id!==product.id)),checkbasket]);
            
            
        }
        else{
            setBasket([...basket,{
                id:product.id,
                amount:1,
                price:product.price,
                title:product.title,
                img:product.image
               
            }])
        }
        console.log(basket);    
    }
    const removeBasket=()=>{
        const checkbasket=basket.find(item=>item.id===product.id);
        if(checkbasket.amount===0){
            
            setBasket([...(basket.filter(item=>item.id!==product.id))]);
        }
        else{
            checkbasket.amount-=1;
            setBasket([...(basket.filter(item=>item.id!==product.id)),checkbasket])
        }
      
    }

    return(
        <div className='product-container'>
            <div className='product-img'> <img src={product.image} alt=""/></div>
            <div className="action-container">

            <div className='product-info'>
            <h5>{product.title}</h5>
            <h5>{product.price} TL</h5>
            </div>
            <div className='action'>
            <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
            <span className='amount'>{basketItem&&basketItem.amount||0} </span>
            <button disabled={money<product.price+total} onClick={addBasket}>Satın Al</button>
            </div>
            </div>
            </div>
        
    )
}

export default Product;