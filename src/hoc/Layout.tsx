import { Header, Footer} from "../layout"
import { Outlet } from 'react-router-dom'

export const Layout = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
};