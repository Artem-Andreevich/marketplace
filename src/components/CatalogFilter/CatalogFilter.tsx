import { useLocation, useSearchParams } from "react-router-dom";
import { ISortingData } from "../../types"
import { useEffect, useState } from "react";
import CheckboxFilter from "./CheckboxFilter";
import { useGetCategoriesFiltersQuery } from "../../store/api/api";
import { Loader } from "../Loader";

interface SortingProps {
	dataSort: ISortingData,
} 

export const CatalogFilter = ({dataSort}: SortingProps) => {

	const location = useLocation()
	const [ _, setSearchParams ] = useSearchParams();
	const queryParams = new URLSearchParams(location.search);
	const { isLoading, data: filters } = useGetCategoriesFiltersQuery(queryParams.get("category") || "")
	const [ value, setValue ] = useState<any>({min: dataSort.minCoast, max: dataSort.maxCoast})
    console.log(filters)
    console.log(dataSort)

	useEffect( () =>{
		setValue({min: dataSort.minCoast, max: dataSort.maxCoast})
	},[dataSort])

	const filterQuery: any = {
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



    // const [checked, setChecked] = useState<any>({});

	// const onSelectedChange = (event: React.ChangeEvent<HTMLInputElement>, index: any, sort: any) => {
	// 	checkboxFilter(event, sort)
    //     setChecked((previousState: any) => ({
    //         ...previousState,
    //         [index]: !previousState[index]
    //     }));
	// };
  
	// const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
	// const disabled = checkedCount >= 1;



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

			{filters?.map((item): any => {
				if(item.type === "checkbox")
					return (
						<div className="filters__item">
							<h4 className="filters__name">{item.filterName}</h4>
							<div className="filters__checkboxs">
								{/* {item.value.map((value, index) => {
									if(dataSort.colors.includes(value))
										return (
											<label className="page__checkbox" key={value}>
												<input type="checkbox" name={value} 
												onChange={(event) => onSelectedChange(event, index, filterQuery[item.filterBy])}
												checked={checked[index] || false}
												disabled={!checked[index] && disabled}
												/>
												<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 0.253167 0.253167">
												<rect fill="#ED4300" width="0.253167" height="0.253167" rx="0.0506327" ry="0.0506327"></rect>
												<polyline fill="none" stroke="white" strokeWidth="0.0253182" strokeLinecap="round" strokeLinejoin="round" points="0.177213,0.0885956 0.113921,0.151887 0.0759509,0.113914 "></polyline>
												</svg>
												<span>{value}</span>
											</label>
										)
									}) 
								} */}
								<CheckboxFilter 
									checkboxs={item.value} 
									sortFn={(event: React.ChangeEvent<HTMLInputElement>) => {checkboxFilter(event, filterQuery[item.filterBy])}}
								/>
							</div>
						</div>
					)
				})
			}

			{/* {dataSort.colors.length > 1 ? 
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
			} */}
		</div>
	);
};