import { useSelector } from "react-redux";
import { Breadcrumbs, CartItem } from "../components"
import { IProduct } from "../types";

export const CartPage = () => {

    const products = useSelector( ({cart}: any) => cart.products )
    
    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <div className="aside-grid">
                    <div className="cart__list">
                        {products.map((item:IProduct) => {
                            return (
                                <CartItem item={item} key={item.article}/>
                            )
                        })}
                    </div>
                    <div className="cart__aside form">form</div>
                </div>
            </div>
        </main>
    );
};