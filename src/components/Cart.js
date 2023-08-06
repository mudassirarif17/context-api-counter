import React , {useContext} from "react";
import { CartContext } from "../context/Cart";

const Cart =()=>{
    const cart = useContext(CartContext)
    const total = cart.item.reduce((a,b)=> a+ b.price ,0)
    return(
        <div className="cart-item">
            <h1>Cart</h1>
            {
                cart && cart.item.map((data)=><li>{data.name} - ${data.price}</li>)
            }
            <h5>Total Bill : ${total}</h5>
        </div>
    )
}

export default Cart;