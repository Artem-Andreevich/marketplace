import React from 'react'
import { useLocation } from 'react-router-dom'

const Breadcrumbs = () => {

    const location = useLocation()
    console.log(location)
    return (
        <div>
            <h2>привет</h2>
        </div>
    )
}

export default Breadcrumbs