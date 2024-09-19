import { Breadcrumbs, CartItem } from "../components"
import { useAppSelector } from "../hooks/useAppSelector";


export const CartPage = () => {

    const { cart } = useAppSelector( cart => cart)

    return (
        <main className="page inner-page">
            <Breadcrumbs />
            <div className='container'>
                <div className="aside-grid">
                    <div className="cart__list">
                        {cart.map(item => {
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