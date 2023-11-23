import Filter from "./Filter";

const AllCategories = () => {
    return(<div className="categories">
       {/**  <h1>Categories of Sushi</h1>*/}
        {['All types', 'Classic Rolls', 'Uramaki', 'Nigiri', 'Sashimi', 'Maki', 'Combo Set'].map((category, index) => <Filter category={category} key={index} />
        )}
        </div>)
}
export default AllCategories;