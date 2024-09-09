import { useActions, useSales } from "../../hooks";
import { IProductCart } from "../../types";

type CartItemProps = {
    item: IProductCart
}

export const CartItem = ({ item }: CartItemProps) => {

    const { addProduct, removeProduct } = useActions()
    const sales = useSales(item.product.newPrice, item.product.oldPrice)

    return (
        <div className="cart-item"> 
            <img src={item.product.img[0]} alt=""/>
            <div className="cart-item__title">{item.product.name}</div>
            <div className="cart-item__order">
                <div className="price">
                <div className="price__old">
                    <s>{item.product.oldPrice} ₽</s><span>{sales}%</span>
                </div>
                <div className="price__new">{item.product.newPrice} ₽</div>
                </div>
                <div className="counter js-counter">
                    <button 
                        onClick={() => removeProduct(item.product)}
                        className="counter__dec" 
                        type="button"
                    >
                        <svg className="icon" width="16px" height="4px">
                            <use xlinkHref="#counter-dec"></use>
                        </svg>
                    </button>
                    <input 
                        type="text" 
                        value={item.productCount} 
                        readOnly
                    />
                    <button 
                        onClick={() => addProduct(item.product)}
                        className="counter__inc" 
                        type="button"
                    >
                        <svg className="icon" width="16px" height="16px">
                            <use xlinkHref="#counter-inc"></use>
                        </svg>
                    </button>
                </div>
                <div className="price__total">{item.product.newPrice * item.productCount} ₽</div>
                <button className="del"> 
                    <svg className="icon" width="12px" height="12px">
                        <use xlinkHref="#close"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};