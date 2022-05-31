import React from 'react';


const Header=({money,total})=>{
    return(
      
     <div className='header'>
          {total>0&&(
              <div>Harcayacak {money-total} TL paranız kaldı!</div>
          )}
          {total===0&&(
              <div>Harcamak için {money} kadar paranız var. </div>

          )}
          {money-total===0&&(
              <div>Para bitti, para kazan </div>
          )}
      </div>
      
    )
}

export default Header;