
export const RegForm = () => {

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
            <div className="form-floating">
                <input className="form-control" type="password" placeholder="Подтверждение пароля" required/>
                <label>Подтверждение пароля</label>
            </div>
            <div className="form-floating">
                <input className="form-control" type="text" placeholder="Контактное лицо"/>
                <label>Контактное лицо</label>
            </div>
            <p>Указывая номер телефона, вы соглашаетесь с&nbsp;<a className="page__menu-link page__dotted" href="#">обработкой персональных данных</a></p>
            <button><span>Регистрация</span>
                <svg className="icon" width="16px" height="12px">
                    <use xlinkHref="#category-arr"></use>
                </svg>
            </button>
        </form>
    )
}
