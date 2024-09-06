import { useSales } from "../../hooks";
import { IProduct } from "../../types";

type CartItemProps = {
    item: IProduct
}

export const CartItem = ({item}: CartItemProps) => {

    const sales = useSales(item.newPrice, item.oldPrice)
    
    return (
        <div className="cart-item"> 
            <img src={item.img} alt=""/>
            <div className="cart-item__title">{item.name}</div>
            <div className="cart-item__order">
                <div className="price">
                <div className="price__old">
                    <s>{item.oldPrice} ₽</s><span>{sales}%</span>
                </div>
                <div className="price__new">{item.newPrice} ₽</div>
                </div>
                <div className="counter js-counter">
                    <button className="counter__dec js-dec" type="button">
                        <svg className="icon" width="16px" height="4px">
                            <use xlinkHref="#counter-dec"></use>
                        </svg>
                    </button>
                    <input type="text" defaultValue="1"/>
                    <button className="counter__inc js-inc" type="button">
                        <svg className="icon" width="16px" height="16px">
                            <use xlinkHref="#counter-inc"></use>
                        </svg>
                    </button>
                </div>
                <div className="price__total">{item.newPrice} ₽</div>
                <button className="del"> 
                    <svg className="icon" width="12px" height="12px">
                        <use xlinkHref="#close"></use>
                    </svg>
                </button>
            </div>
        </div>
    );
};