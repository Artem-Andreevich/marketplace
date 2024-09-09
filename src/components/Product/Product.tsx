import { useLayoutEffect } from "react";
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from "../../store/api/api";
import { useSales } from "../../hooks";
import { Loader } from "../Loader";
import { ProductChart } from "../ProductChart/ProductChart"


export const Product = () => {

    const { productID } = useParams()
    const { isLoading, data: product } = useGetProductByIdQuery(Number(productID))
    const sales = useSales(product?.newPrice, product?.oldPrice)

    useLayoutEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [productID]);

    const productChartData = {
        prices: product?.priceHistory?.prices,
        months: product?.priceHistory?.months,
    }

    return (
        <>
            {isLoading ? 
                <Loader /> :
                <div className="product">
                    <div className="container">
                        <div className="product__inner">
                            <div className="product__pictures">
                                <div className="product__img"> 
                                    <img src={product?.img[0]} alt="" />
                                </div>
                                <div className="product__add-to">
                                    <button>
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
                                <h3>{product?.name}</h3>
                                <span>Код товара: {product?.article}</span>
                                <dl>
                                    <div>
                                        <dd>BPS-B 150-100 Радиальный вентилятор с пластмассовым корпусом и металлическими лопастями</dd>
                                    </div>
                                    <div>
                                        <dt>Материал</dt>
                                        <dd>Корпус произведен из пластмассы.</dd>
                                    </div>
                                    <div>
                                        <dt>Вперед загнутые лопатки произведены из металла. Класс изоляции</dt>
                                        <dd>B</dd>
                                    </div>
                                    <div>
                                        <dt>Директива</dt>
                                        <dd>Соответствует EN 600335-1 EN 600335-2-80</dd>
                                    </div>
                                    <div>
                                        <dt>Контроль скорости</dt>
                                        <dd>Скорость изменяется при помощи дополнительного регулятора скорости</dd>
                                    </div>
                                    <div>
                                        <dt>Область применения</dt>
                                        <dd>В химической среде, лабораториях, жилых домах, яхтах, в охлаждении электродвигателей, упаковочном оборудовании, промышленных и коммерческих областях.</dd>
                                    </div>
                                </dl><a className="page__menu-link page__dotted bold" href="#">Все товары поставщика: «Bahcivanmotor.ru»</a>
                                <p>Поставщик вернёт деньги, если не получите заказ в течении 180 дней после отправки</p>
                                <p>Товар добавлен: 01.01.2022</p>
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
                                                    <ProductChart data={productChartData} />
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
                                        <s>{product?.oldPrice}</s><span>{sales}%</span>
                                    </div>
                                    <div className="price__new">{product?.newPrice} ₽</div>
                                </div>
                                <div className="product__add-cart">
                                    <button className="add-cart" type="button"><span>В корзину</span>
                                        <svg className="icon" width="24px" height="28px">
                                            <use xlinkHref="#add-cart"></use>
                                        </svg>
                                    </button>
                                    <div className="counter js-counter">
                                        <button className="counter__dec js-dec" type="button">
                                            <svg className="icon" width="16px" height="4px">
                                                <use xlinkHref="#counter-dec"></use>
                                            </svg>
                                        </button>
                                        {/* <input type="text" value="1" maxlength="2" /> */}
                                        <button className="counter__inc js-inc" type="button">
                                            <svg className="icon" width="16px" height="16px">
                                                <use xlinkHref="#counter-inc"></use>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};