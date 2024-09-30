import { Link } from "react-router-dom";
import { RegForm } from "../components/Form";

export const RegisterPage = () => {

    return (
        <main className="page inner-page">
            <div className='container'>
                <h1>RegisterPage</h1>
                <RegForm />
                <Link to={'/auth'}>Войти</Link>
            </div>
        </main>
    );
};