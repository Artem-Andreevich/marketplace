import { useLocation, useSearchParams } from "react-router-dom";
import { ISortingData } from "../../types"
import { useEffect, useState } from "react";
import CheckboxFilter from "./CheckboxFilter";

interface SortingProps {
	dataSort: ISortingData,
} 

export const Sorting = ({dataSort}: SortingProps) => {

	const location = useLocation()
	const [ _, setSearchParams ] = useSearchParams();
	const [ value, setValue ] = useState<any>({min: dataSort.minCoast, max: dataSort.maxCoast})
	const queryParams = new URLSearchParams(location.search);

	useEffect( () =>{
		setValue({min: dataSort.minCoast, max: dataSort.maxCoast})
	},[dataSort])

	const filterQuery = {
		color: 'details.color',
		memory: 'details.memory',
		minPrices: 'newPrice_gte',
		maxPrices: 'newPrice_lte',
	}

	const onChangeInputMinValue = (event: React.ChangeEvent<HTMLInputElement>) => {
		if( event.target.value >= value.max ) {
			console.log('to much')

		}
		else
			setValue({min: event.target.value, max: value.max})

	}

	const checkboxFilter = (event: React.ChangeEvent<HTMLInputElement>, filterBy: any) => {
		if (event.target.checked) {
			queryParams.set(filterBy, event.target.name)
			setSearchParams(queryParams)
		}
		else
			queryParams.delete(filterBy)
			setSearchParams(queryParams)
	}

	const minMaxPriceFilter = (filterBy: any, data: any) => {
		if(value.min < dataSort.minCoast || value.min > dataSort.maxCoast ) {
			queryParams.has(filterBy) ?
				setValue({...value, min: queryParams.get(filterQuery.minPrices)}) :
				setValue({...value, min: dataSort.minCoast}) 
			return
		} 
		if(value.max > dataSort.maxCoast || value.max < dataSort.minCoast ) {
			queryParams.has(filterBy) ?
				setValue({...value, max: queryParams.get(filterQuery.maxPrices)}) :
				setValue({...value, max: dataSort.maxCoast}) 
			return
		}
		if(queryParams.has(filterBy)) {
			queryParams.delete(filterBy)
			queryParams.append(filterBy, data)
			setSearchParams(queryParams)
		}
		else
			queryParams.append(filterBy, data)
			setSearchParams(queryParams)
	}

	return (
		<div className="sort">

			{dataSort.colors.length > 1 ? 
				<CheckboxFilter 
					checkboxs={dataSort.colors} 
					sortFn={(event: React.ChangeEvent<HTMLInputElement>) => {checkboxFilter(event, filterQuery.color)}}
				/>
				: null
			}
			{dataSort.memory.length > 1 ? 
				<CheckboxFilter 
					checkboxs={dataSort.memory} 
					sortFn={(event: React.ChangeEvent<HTMLInputElement>) => {checkboxFilter(event, filterQuery.memory)}}
				/>
				: null
			}

			<div className="sort__main">
				<button className="btn__open-filteActions
				Settingsr d-lg-none" type="button">
					<svg width="24px" height="24px">
						<use xlinkHref="#open-filter"></use>
					</svg>
				</button>
				<div className="sort-price d-none d-lg-flex">
				<label className="sort-price__range"><span>Цена от</span>
					<input 
						type="text" 
						value={value.min} 
						onChange={(event)=> {setValue({...value, min: event.target.value })}}
						onBlur={() => {minMaxPriceFilter(filterQuery.minPrices, value.min)}}
					/>
				</label>
				<label className="sort-price__range"><span>цена до </span>
					<input 
						type="text" 
						onBlur={() => {minMaxPriceFilter(filterQuery.maxPrices, value.max)}}
						value={value.max} 
						onChange={(event)=> {setValue({...value, max: event.target.value})}}
						/>
				</label>
				</div><a className="sort-dropdown" href="#" role="button"> 
				<div className="sort-dropdown__label">Сортировать</div><span className="bold">Сначала дешевле</span></a>
				<ul className="dropdown-menu">
				<li><a className="dropdown-item" href="#">Action</a></li>
				<li><a className="dropdown-item" href="#">Another action</a></li>
				<li><a className="dropdown-item" href="#">Something else here</a></li>
				</ul><a className="sort-dropdown d-none d-lg-flex" href="#" role="button" ><span className="bold">Производитель</span></a>
				<ul className="dropdown-menu">
				<li>
					<div className="page__checkbox"> 
					<label>
						<input type="checkbox"/><i className="icon-checkbox">
						<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 0.245231 0.245231">
							<rect fill="#E31E5A" width="0.245231" height="0.245231" rx="0.0653946" ry="0.0653946"></rect>
							<path fill="white" fillRule="nonzero" d="M0.175047 0.10965c0.00638143,-0.00638143 0.00638143,-0.0167345 0,-0.0231159 -0.00638143,-0.00638143 -0.0167345,-0.00638143 -0.0231159,0l-0.0374892 0.0374892 -0.0211394 -0.0211394c-0.00638143,-0.00638143 -0.0167345,-0.00638143 -0.0231159,0 -0.00638143,0.00638143 -0.00638143,0.0167345 0,0.0231159l0.032498 0.032498 0.000196958 0.000201592c0.00638375,0.00638375 0.0167368,0.00638375 0.0231205,0l-2.31715e-006 -2.31715e-006 0.0490471 -0.0490471z"></path>
						</svg></i><span>Все производители</span>
					</label><span>81</span>
					</div>
				</li>
				<li>
					<div className="page__checkbox"> 
					<label>
						<input type="checkbox"/><i className="icon-checkbox">
						<svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 0.245231 0.245231">
							<rect fill="#E31E5A" width="0.245231" height="0.245231" rx="0.0653946" ry="0.0653946"></rect>
							<path fill="white" fillRule="nonzero" d="M0.175047 0.10965c0.00638143,-0.00638143 0.00638143,-0.0167345 0,-0.0231159 -0.00638143,-0.00638143 -0.0167345,-0.00638143 -0.0231159,0l-0.0374892 0.0374892 -0.0211394 -0.0211394c-0.00638143,-0.00638143 -0.0167345,-0.00638143 -0.0231159,0 -0.00638143,0.00638143 -0.00638143,0.0167345 0,0.0231159l0.032498 0.032498 0.000196958 0.000201592c0.00638375,0.00638375 0.0167368,0.00638375 0.0231205,0l-2.31715e-006 -2.31715e-006 0.0490471 -0.0490471z"></path>
						</svg></i><span>Bahcivanmotor</span>
					</label><span>27</span>
					</div>
				</li>
				</ul>
			</div>
			</div>
	);
};