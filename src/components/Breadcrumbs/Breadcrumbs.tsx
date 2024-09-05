import { useLocation } from 'react-router-dom'

export const Breadcrumbs = () => {

    const location = useLocation()
    // console.log(location)
    return (
        <div className='container'>
            <span>breadcrumbs</span>
        </div>
    )
};