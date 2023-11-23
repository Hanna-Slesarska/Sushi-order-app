import { addItemToCart } from "../../redux/CartSlice";
import ChangeQuantity from "../cartComponent/ChangeQuantity";
import { useState } from 'react';
import { useDispatch } from "react-redux";

const Dish = ({dish}) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch()
    return (
        <div >
            <div className="product-card">
                <div className="dish-container">
                    <h3>{dish.name}</h3>
                    <p className="dish-category">{dish.category}</p>
                    <img className="sushi-img" src={`${dish.img}.jpg`} alt='sushi'/>
                </div>
                <div className="product-info">
                    <div className="description-block">
                        <p className="description-title">Decription</p> 
                        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
                    </div>
                    <p className="description">{dish.description}</p>
                    <div className="description-block">
                    <p>${dish.price}</p>
                    <button onClick={() => (dispatch(addItemToCart({dish, quantity})))} className="addToCart-btn">+ Add to cart</button>
                </div>
                </div>

                
            </div>
        </div>
       
    )
}
export default Dish;