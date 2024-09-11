import { useLocation, useNavigate, useParams } from "react-router-dom";
import { ISortingData } from "../../types"
import { useEffect, useState } from "react";
import { RangeSlider } from "../RangeSlider"

interface SortingProps {
	dataSort: ISortingData
} 

export const Sorting = ({dataSort}: SortingProps) => {

	// {/* Добавить все сорт данные в один state обьектом */}


	console.log(dataSort)
	const { search } = useLocation()
	const navigate = useNavigate()


	const [ value, setValue ] = useState<any>({min: 0, max: 100})
	useEffect( () =>{
		setValue({min: dataSort.minCoast, max: dataSort.maxCoast})
	},[dataSort])



	const handlerColor = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.checked ?
		navigate({ search: `${search}&details.color=${event.target.name}` }) :
		navigate( -1 )
	}
	const handlerMemory = (event: React.ChangeEvent<HTMLInputElement>) => {
		event.target.checked ?
		navigate({ search: `${search}&details.memory=${event.target.name}` }) :
		navigate( -1 )
	}




	return (
		<div className="sort">
			<div>
			{
				dataSort.colors?.map( (item: any, index:number) => { return (
				<label key={index}>
						<input type="checkbox" name={item} onChange={(event)=> handlerColor(event)} />
						<span>{item}</span>
					</label>
				)})
				}
				</div>
				<div>
				{
					dataSort.memory?.map( (item: any, index:number) => { return (
					<label key={index}>
							<input type="checkbox" name={item} onChange={(event)=> handlerMemory(event)} />
							<span>{item}</span>
						</label>
					)})
					}
				</div>

				<RangeSlider min={value.min} max={value.max} step={1} value={value} onChange={setValue}/>
				<p>The min value is: <span>{value.min}</span></p>
				<p>The max value is: <span>{value.max}</span></p>



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
						// onBlur={(event)=> handlerPrices(event)}
						value={value.min} 
					/>
				</label>
				<label className="sort-price__range"><span>цена до </span>
					<input 
							type="text" 
							// onChange={(event)=> handlerPrices(event)}
							defaultValue={dataSort.minCoast} 
							min={dataSort.minCoast} 
							max={dataSort.maxCoast}
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