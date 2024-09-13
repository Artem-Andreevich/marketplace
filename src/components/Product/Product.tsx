import { useEffect, useLayoutEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from "../../store/api/api";
import { useActions, useSales } from "../../hooks";
import { Loader } from "../Loader";
import { ProductChart } from "../ProductChart/ProductChart"
import { useAppSelector } from "../../hooks/useAppSelector";


export const Product = () => {

    const cart  = useAppSelector( state => state.cart)
    const favorites  = useAppSelector( state => state.favorites)
    const { addProduct, removeProduct, toggleFavorite } = useActions()
    const [ counterValue, setCounterValue ] = useState(0)
    const [ isFavorites, setIsFavorites ] = useState(false)

 
    const { productID } = useParams()
    const { isLoading, data: product } = useGetProductByIdQuery(Number(productID))

    useEffect( () => {
        const productIndex: number = cart.findIndex(item => item.product.id === product?.id)
        const countItemInCart: number = cart[productIndex]?.productCount
        setCounterValue(countItemInCart)
    },[cart, product?.id])

    useEffect( () => {
        const isFavorites: boolean = favorites.some(item => item.id === product?.id)
        setIsFavorites(isFavorites)
    },[favorites, product?.id])

    const sales = useSales(product?.newPrice, product?.oldPrice)

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [productID]);

    return (
        <>
            {isLoading ? 
                <Loader /> :
                <>
                    {product ? 
                        <div className="product">
                        <div className="container">
                            <div className="product__inner">
                                <div className="product__pictures">
                                    <div className="product__img"> 
                                        {product.img.map( item => 
                                            <img src={item} alt="" key={item}/>
                                        )}
                                    </div>
                                    <div className="product__add-to">
                                        <button 
                                            className={isFavorites ? "add-to active" : "add-to"}
                                            onClick={() => {toggleFavorite(product)}}
                                        >
                                            <svg className="icon-fill" width="28px" height="24px">
                                                <use xlinkHref="#fav"></use>
                                            </svg>
                                        </button>
                                        <button>
                                            <svg className="icon" width="28px" height="24px">
                                                <use xlinkHref="#compare"></use>
                                            </svg>
                                        </button><span>
                                            <svg className="icon" width="30px" height="20px">
                                                <use xlinkHref="#views"></use>
                                            </svg>198</span>
                                    </div>
                                </div>
                                <div className="product__attrs"> 
                                    <h3>{product.name}</h3>
                                    <span>Код товара: {product.article}</span>
                                    <dl>{product.description?.map<any>((item, index) => {
                                            return (
                                                <div key={index}>
                                                    <dt>{Object.keys(item)}</dt>
                                                    <dd>{Object.values(item)}</dd>
                                                </div>
                                            )
                                        })}
                                    </dl>
                                </div>
                                <div className="product__buy">
                                    <div className="product__links"> <a href="#">Хочу скидку </a><a href="#">Узнать о снижении цены</a></div>
                                    <div className="product__stock">
                                        <dl>
                                            <div>
                                                <dt>Доставим в Уфу:</dt>
                                                <dd>1 июля 2023</dd>
                                            </div>
                                            <div className="chart">
                                                <dt>История цены:</dt>
                                                <dd>
                                                    <div id="priceChart">
                                                        {product.priceHistory ?
                                                            <ProductChart data={product.priceHistory} /> :
                                                            <div>График не готов</div>
                                                        }
                                                    </div>
                                                </dd>
                                            </div>
                                        </dl>
                                    </div>
                                    <div className="product__price price"><a className="price__nds page__menu-link page__dotted" href="#" data-bs-toggle="dropdown" aria-expanded="false">Цена с НДС</a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                        </ul>
                                        <div className="price__old">
                                            <s>{product.oldPrice}</s><span>{sales}%</span>
                                        </div>
                                        <div className="price__new">{product.newPrice} ₽</div>
                                    </div>
                                    <div className="product__add-cart">
                                        <button className="add-cart" 
                                            type="button"
                                            onClick={() => addProduct(product)}
                                        >
                                            <span>В корзину</span>
                                            <svg className="icon" width="24px" height="28px">
                                                <use xlinkHref="#add-cart"></use>
                                            </svg>
                                        </button>
                                        <div className={ counterValue ? "counter" : "counter hidden"}>
                                            <button 
                                                className="counter__dec" 
                                                onClick={() => removeProduct(product)}
                                                type="button"
                                            >
                                                <svg className="icon" width="16px" height="4px">
                                                    <use xlinkHref="#counter-dec"></use>
                                                </svg>
                                            </button>
                                            <input 
                                                type="text" 
                                                value={counterValue} 
                                                readOnly
                                            />
                                            <button 
                                                className="counter__inc" 
                                                type="button"
                                                onClick={() => addProduct(product)}
                                            >
                                                <svg className="icon" width="16px" height="16px">
                                                    <use xlinkHref="#counter-inc"></use>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> :
                    <div className="container">
                        <h2>Товар не найден</h2>
                    </div>
                    }
                </>
            }
        </>
    );
};