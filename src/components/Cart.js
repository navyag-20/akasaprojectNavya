import React from 'react';
import Drawer from '@mui/material/Drawer';
import './Cart.css';

const Cart = (props) => {
    
  const { openCart, closeCart } = props;
  return (
    <div>
        <Drawer open={openCart} anchor="right" onClose={closeCart} >
           <div style={{width: "30vw"}} className='my-cart'>
            <h2>My Cart</h2>
           </div>
        </Drawer>
    </div>
  )
}

export default Cart