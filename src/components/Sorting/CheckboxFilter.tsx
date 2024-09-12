import { useState } from "react";

const CheckboxFilter = ({ checkboxs, sortFn }: any) => {


    const [checked, setChecked] = useState<any>({});

	const onSelectedChange = (event: React.ChangeEvent<HTMLInputElement>, index: any) => {
        sortFn(event)
        setChecked((previousState: any) => ({
            ...previousState,
            [index]: !previousState[index]
        }));
	};
  
	const checkedCount = Object.keys(checked).filter(key => checked[key]).length;
	const disabled = checkedCount >= 1;


    return (
        <div className="filter-checkbox">

            {checkboxs.map( (item: any, index:number) => { 
                return (
                    <label className="page__checkbox" key={index}>
                    <input type="checkbox" name={item} 
                    onChange={(event) => onSelectedChange(event, index)}
                    checked={checked[index] || false}
                    disabled={!checked[index] && disabled}
                    />
                    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 0.253167 0.253167">
                    <rect fill="#ED4300" width="0.253167" height="0.253167" rx="0.0506327" ry="0.0506327"></rect>
                    <polyline fill="none" stroke="white" strokeWidth="0.0253182" strokeLinecap="round" strokeLinejoin="round" points="0.177213,0.0885956 0.113921,0.151887 0.0759509,0.113914 "></polyline>
                    </svg>
                    <span>{item}</span>
                </label>
            )})}
        </div>


    )
};

export default CheckboxFilter;