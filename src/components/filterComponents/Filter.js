import { useDispatch, useSelector } from "react-redux";
import { filterCategory, getSelectedCategory } from "../../redux/sushiSlice";

const Filter = ({category}) => {
    const selectedCategory = useSelector(getSelectedCategory);
    const dispatch = useDispatch();
    return (<div className="filter-block">
        <p onClick={() => dispatch(filterCategory(category))} className={selectedCategory === category ? "btnCategorySelected" : "btnCategory"}>{category}</p>
        </div>)
}
export default Filter;