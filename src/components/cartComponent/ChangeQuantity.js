const ChangeQuantity = ({quantity, setQuantity}) => {
    const addQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity)
    }
    const removeQuantity = () => {
        if (quantity <= 1 ) return;
        const newQuantity = quantity - 1;
        setQuantity(newQuantity)
    }

    return (<div className="quantity-block">
        <button onClick={removeQuantity} className="quantity-btn">-</button>
        <span>{quantity}</span>
        <button onClick={addQuantity} className="quantity-btn">+</button>
    </div>)
}
export default ChangeQuantity;