import dataSushi from "../../data/dataSushi";
import Dish from "./Dish";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/sushiSlice";

const Dishes = () => {
    const selectedCategory = useSelector(getSelectedCategory);
    return( 
    <div className="container-products">
        <div className="products">
            {dataSushi.filter(dish => {
        if (selectedCategory === 'All types') return true;
            return selectedCategory === dish.category;
       }).map((dish, index) => <Dish dish={dish} key={index}/>)}
        </div>
       
    </div>)
}
export default Dishes;