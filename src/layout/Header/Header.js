import { Link } from 'react-router-dom';
import { useSelector } from "react-redux"


export function Header() {

	const cartCount = useSelector(({ cart }) => cart.products.length)

	return (
		<header className="header">
			<div className="header__top d-none d-lg-block">
				<div className="container">
					<div className="header__top__line">
						<nav>
							<ul className="header__nav">
								<li><Link to="/" className="page__menu-link">Главная</Link></li>
								<li><Link to="/about" className="page__menu-link">О компании</Link></li>
								<li><a className="page__menu-link" href="#">Акции и скидки</a></li>
								<li><a className="page__menu-link dropdown-toggle" href="#" data-bs-toggle="dropdown" aria-expanded="false">Покупателям</a>
									<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
										<li><a className="dropdown-item" href="#">Action</a></li>
										<li><a className="dropdown-item" href="#">Another action</a></li>
										<li><a className="dropdown-item" href="#">Something else here</a></li>
									</ul>
								</li>
								<li><a className="page__menu-link" href="#">Сотрудничество</a></li>
								<li><a className="page__menu-link" href="#">Пункты выдачи</a></li>
								<li><a className="page__menu-link" href="#">Контакты</a></li>
							</ul>
						</nav>
						<div className="header__callback"><a className="page__menu-link page__dotted" href="#" data-bs-toggle="modal" data-bs-target="#callback-modal">Обратная связь</a><a className="page__menu-link bold phone" href="tel:+79908007000">
							<svg width="20px" height="20px">
								<use xlinkHref="#phone"></use>
							</svg><span>8 990 800 7000 </span></a></div>
					</div>
				</div>
			</div>
			<div className="header__bottom">
				<div className="container">
					<div className="header__grid">
						<div className="header__btn"><a className="btn__catalog js-open-menu" href="#">
							<svg className="m-icon" width="50px" height="50px">
								<use xlinkHref="#catalog"></use>
							</svg>
							<svg className="icon" width="20px" height="20px">
								<use xlinkHref="#close"></use>
							</svg></a></div>
						<div className="header__logo logo"><a href="#"> <img src="images/logo.svg" alt="" /></a></div>
						<div className="header__callback d-lg-none"><a className="page__menu-link bold phone" href="tel:+79908007000">
							<svg width="20px" height="20px">
								<use xlinkHref="#phone"></use>
							</svg><span>8 990 800 7000 </span></a></div>
						<div className="header__search">
							<form className="search-form" action="/search/" method="GET">
								<input type="text" name="q" placeholder="Искать в каталоге" />
								<button>
									<svg className="icon" width="40px" height="40px">
										<use xlinkHref="#loop"></use>
									</svg>
								</button>
							</form>
						</div>
						<div className="header__control d-none d-lg-block">
							<ul className="control">
								<li><a className="control__item active" href="#">
									<div className="control__icon">
										<svg className="icon control-icon" width="24px" height="28px">
											<use xlinkHref="#user"></use>
										</svg>
									</div></a></li>
								<li><a className="control__item" href="#">
									<div className="control__icon">
										<svg className="icon-fill control-icon" width="28px" height="24px">
											<use xlinkHref="#fav"></use>
										</svg><span className="control__label">12</span>
									</div></a></li>
								<li><a className="control__item" href="#">
									<div className="control__icon">
										<svg className="icon control-icon" width="28px" height="24px">
											<use xlinkHref="#compare"></use>
										</svg><span className="control__label">9</span>
									</div></a></li>
								<li><a className="control__item" href="#">
									<div className="control__icon">
										<svg className="icon control-icon" width="24px" height="30px">
											<use xlinkHref="#basket"></use>
										</svg><span className="control__label">{cartCount > 0 ? cartCount : null}</span>
									</div><span>Корзина</span></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};