import { useSelector } from "react-redux";
import { Breadcrumbs, CartItem } from "../components"
import { IProduct } from "../types";

export const CartPage = () => {

    const { cart }: any = useSelector( cart => cart)

    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <div className="aside-grid">
                    <div className="cart__list">
                        {cart.map((item: any) => {
                            return (
                                <CartItem item={item} key={item.product.article}/>
                            )
                        })}
                    </div>
                    <div className="cart__aside form">form</div>
                </div>
            </div>
        </main>
    );
};