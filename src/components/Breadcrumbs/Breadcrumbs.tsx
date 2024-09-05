import { useLocation } from 'react-router-dom'

export const Breadcrumbs = () => {

    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h2>привет</h2>
        </div>
    )
};