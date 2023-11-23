
import AllCategories from './components/filterComponents/AllCategories';
import TopSushi from './components/topComponent/TopSushi';
import { useState } from 'react';
import iconCart from './icons8-shopping-cart-48.png';

import { useSelector } from 'react-redux';
import { getTotalArticles } from './redux/CartSlice';
import Cart from './components/cartComponent/Cart';
import Dishes from './components/dishesComponents/Dishes';


const Menu = () => {
  const [cartContainer, setCartContainer] = useState(false);
  const openCart = () => {
    setCartContainer(!cartContainer)
}
const totalItems = useSelector(getTotalArticles);
  return (
    <div>
        <TopSushi />
        <AllCategories />
        <Dishes />
  
        <div  className='link-cart'><i onClick={() => openCart()} className="linck-contact"><img className="cartIcon" src={iconCart} alt='iconCart' /></i>
        {totalItems > 0 &&
               <span onClick={() => openCart()} className='totalItemsCart'>{totalItems}</span>
              }
          </div>
            <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}>
              <div className='box-close-cart'>
                <button className='btn-close-cart' onClick={() => openCart()}>
                <i className='fas	fa-times'></i>
                </button>
            </div>
          <Cart/>
          
        </div>
            <div className={cartContainer ? 'container-cart-true' : 'container-cart-false'}>
            <div className='box-close-cart'>
              <button className='btn-close-cart' onClick={() => openCart()}>
              <i className='fas	fa-times'></i>
                </button>
            </div>
          <Cart/>
         
        </div>
        
      
    </div>
  );
}

export default Menu;
