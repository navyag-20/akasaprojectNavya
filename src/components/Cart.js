import React from 'react';
import Drawer from '@mui/material/Drawer';

const Cart = (props) => {
    
  const { openCart, closeCart } = props;
  return (
    <div>
        <Drawer open={openCart} anchor="right" onClose={closeCart} >
           <div style={{width: "30vw"}}>Cart</div>
        </Drawer>
    </div>
  )
}

export default Cart