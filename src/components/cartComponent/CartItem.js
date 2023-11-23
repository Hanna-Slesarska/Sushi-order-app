import dataSushi from '../../data/dataSushi'
import binIcon from './icons8-trash-50.png'

const CartItem = ({cartItem}) => {
    const sushi = dataSushi.find(item => item.id === cartItem.dishId)
    
    return(
        <div className='cartItems-container'>
            <img src={`${sushi.img}.jpg`} className="cartItem-img" width="50px" hight="20px" alt="dish"/>
            <div className="box1-cartItem">
                <p className="cartItem-name">{sushi.name}</p>
                <div className="box2-cartItem">
                    <p className="cartItem-quantity-price">{cartItem.quantity} portion(s)</p>
                    <p className="cartItem-quantity-price cartItem-price">Price: ${(sushi.price * cartItem.quantity).toFixed(2)}</p>
                </div>
            </div>
            <img className="bin-icon" src={binIcon} alt="bin" />
    </div>)
}
export default CartItem;


            
            
        