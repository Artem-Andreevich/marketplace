import { useLocation, useSearchParams } from "react-router-dom";
import { Dropdown } from "../../ui/Dropdown";


export const Sorting = () => {

	const location = useLocation()
	const [ _, setSearchParams ] = useSearchParams();
	const queryParams = new URLSearchParams(location.search);
	
	const sortPriceDesc = () => {
		queryParams.set('_sort', '-newPrice')
		setSearchParams(queryParams)
	}

	const sortPriceAsc = () => {
		queryParams.set('_sort', 'newPrice')
		setSearchParams(queryParams)
	}

	return (
		<div className="sort">
			<div className="sort__main">

				{/* 
				<button className="btn__open-filteActions
				Settingsr d-lg-none" type="button">
					<svg width="24px" height="24px">
						<use xlinkHref="#open-filter"></use>
					</svg>
				</button> */}

				<Dropdown>
					<li>
						<button onClick={sortPriceDesc}>По возростанию цены</button>
					</li>
					<li>
						<button onClick={sortPriceAsc}>По убыванию цены</button>
					</li>
				</Dropdown>

			</div>
		</div>
	);
};