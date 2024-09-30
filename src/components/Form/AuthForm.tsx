
export const AuthForm = () => {

    return (
        <form className="reg__form form" action="">
            <div className="form-floating">
                <input className="form-control" type="email" placeholder="Электронная почта" required/>
                <label>Электронная почта</label>
            </div>
            <div className="form-floating">
                <input className="form-control" type="password" placeholder="Пароль" required/>
                <label>Пароль</label>
            </div>
            <button><span>Войти</span>
                <svg className="icon" width="16px" height="12px">
                    <use xlinkHref="#category-arr"></use>
                </svg>
            </button>
        </form>
    )
}
