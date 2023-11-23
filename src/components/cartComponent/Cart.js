import CartItem from './CartItem';

import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/CartSlice";


const Cart = () => {
    const addItems = useSelector(getCartItems);
    const totalPrice = useSelector(getTotalPrice)
    return(
        <div className='icon'>
            <p className="totalPrice">{totalPrice === 0 ? 'Cart is empty' : `Total: $${totalPrice.toFixed(2)}`}</p>
            {addItems.map((cartItem, index) => <CartItem cartItem={cartItem} key={index}/>)}
    </div>)
}
export default Cart;