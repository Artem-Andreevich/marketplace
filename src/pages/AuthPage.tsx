import { Link } from "react-router-dom";
import { AuthForm } from "../components/Form";

export const AuthPage = () => {

    return (
        <main className="page inner-page">
            <div className='container'>
                <h1>AuthPage</h1>
                <AuthForm />
                <Link to={'/register'}>Зарегистрироваться</Link>
            </div>
        </main>
    );
};