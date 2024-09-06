import { useLocation } from 'react-router-dom'

export const Breadcrumbs = () => {

    const location = useLocation()

    return (
        <div className='container'>
            <span>breadcrumbs</span>
        </div>
    )
};