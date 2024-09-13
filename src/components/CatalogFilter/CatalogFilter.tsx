import { useLocation, useSearchParams } from "react-router-dom";
import { ISortingData } from "../../types"
import { useEffect, useState } from "react";
import CheckboxFilter from "./CheckboxFilter";

interface SortingProps {
	dataSort: ISortingData,
} 

export const CatalogFilter = ({dataSort}: SortingProps) => {

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
		<div className="filters">

			<div className="filters__item">
				<h4 className="filters__name">Цена</h4>
				<div className="filters__range">
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
				</div>
			</div>

			{dataSort.colors.length > 1 ? 
				<div className="filters__item">
					<h4 className="filters__name">Цвет</h4>
					<div className="filters__checkboxs">
						<CheckboxFilter 
							checkboxs={dataSort.colors} 
							sortFn={(event: React.ChangeEvent<HTMLInputElement>) => {checkboxFilter(event, filterQuery.color)}}
						/>
					</div>
				</div> : null
			}
			{dataSort.memory.length > 1 ? 
				<div className="filters__item">
					<h4 className="filters__name">Память</h4>
					<div className="filters__checkboxs">
						<CheckboxFilter 
							checkboxs={dataSort.memory} 
							sortFn={(event: React.ChangeEvent<HTMLInputElement>) => {checkboxFilter(event, filterQuery.memory)}}
						/>
					</div>
				</div> : null
			}
		</div>
	);
};