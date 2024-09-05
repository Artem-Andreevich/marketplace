import React from 'react';

export function Menu() {
    return (
        <div className="menu js-menu">
          <div className="container"> 
            <div className="menu__grid"> 
              <div className="menu__list">
                <ul>
                  <li data-category="ct-1"><a href="#">Автотовары</a></li>
                  <li data-category="ct-2"><a href="#">Детские товары</a></li>
                  <li data-category="ct-3"><a href="#">Косметика</a></li>
                  <li data-category="ct-4"><a href="#">Крепеж и фурнитура</a></li>
                  <li data-category="ct-5"><a href="#">Медицинская техника</a></li>
                  <li data-category="ct-6"><a href="#">Обувь</a></li>
                  <li data-category="ct-7"><a href="#">Одежда</a></li>
                  <li data-category="ct-8"><a href="#">Парфюмерия</a></li>
                  <li data-category="ct-9"><a href="#">Посуда</a></li>
                  <li data-category="ct-10"><a href="#">Продукты питания</a></li>
                  <li data-category="ct-11"><a href="#">Промышленное оборудование</a></li>
                  <li data-category="ct-12"><a href="#">Садовая техника</a></li>
                  <li data-category="ct-13"><a href="#">Садовый инструмент</a></li>
                  <li data-category="ct-14"><a href="#">Сантехника</a></li>
                  <li data-category="ct-15"><a href="#">Строительное оборудование</a></li>
                  <li data-category="ct-16"><a href="#">Стройматериалы</a></li>
                  <li data-category="ct-17"><a href="#">Сумки и чемоданы</a></li>
                  <li data-category="ct-18"><a href="#">Текстиль</a></li>
                  <li data-category="ct-19"><a href="#">Электрика</a></li>
                  <li data-category="ct-20"><a href="#">Электроинструмент</a></li>
                </ul>
              </div>
              <div className="menu__items">
                <div className="menu__item active" id="ct-1">
                  <div className="menu__back">
                    <div className="js-back d-flex gap-2 align-items-center d-md-none">
                              <svg className="icon" width="20px" height="20px">
                                <use xlinkHref="#category-arr"></use>
                              </svg><span className="bold">Назад</span>
                    </div>
                    <div className="page__subtitle">Автотовары</div>
                  </div>
                  <ul>
                    <li className="bold out-grid">Женщинам</li>
                    <li><a className="page__menu-link" href="#">Блузки и рубашки</a></li>
                    <li><a className="page__menu-link" href="#">Брюки</a></li>
                    <li><a className="page__menu-link" href="#">Верхняя одежда</a></li>
                    <li><a className="page__menu-link" href="#">Джемперы и водолазки</a></li>
                    <li><a className="page__menu-link" href="#">Джинсы</a></li>
                    <li><a className="page__menu-link" href="#">Комбинезоны</a></li>
                    <li><a className="page__menu-link" href="#">Костюмы</a></li>
                    <li><a className="page__menu-link" href="#">Лонгсливы</a></li>
                    <li><a className="page__menu-link" href="#">Пиджаки, жилеты и жакеты</a></li>
                    <li><a className="page__menu-link" href="#">Платья и сарафаны</a></li>
                    <li><a className="page__menu-link" href="#">Толстовки, свитшоты и худи</a></li>
                    <li><a className="page__menu-link" href="#">Туники</a></li>
                    <li><a className="page__menu-link" href="#">Футболки и топы</a></li>
                    <li><a className="page__menu-link" href="#">Халаты</a></li>
                    <li><a className="page__menu-link" href="#">Шорты</a></li>
                    <li><a className="page__menu-link" href="#">Юбки</a></li>
                    <li><a className="page__menu-link" href="#">Белье</a></li>
                    <li><a className="page__menu-link" href="#">Большие размеры</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                  </ul>
                  <ul>
                    <li className="bold out-grid">Мужчинам</li>
                    <li><a className="page__menu-link" href="#">Блузки и рубашки</a></li>
                    <li><a className="page__menu-link" href="#">Брюки</a></li>
                    <li><a className="page__menu-link" href="#">Верхняя одежда</a></li>
                    <li><a className="page__menu-link" href="#">Джемперы и водолазки</a></li>
                    <li><a className="page__menu-link" href="#">Джинсы</a></li>
                    <li><a className="page__menu-link" href="#">Комбинезоны</a></li>
                    <li><a className="page__menu-link" href="#">Костюмы</a></li>
                    <li><a className="page__menu-link" href="#">Лонгсливы</a></li>
                    <li><a className="page__menu-link" href="#">Пиджаки, жилеты и жакеты</a></li>
                    <li><a className="page__menu-link" href="#">Платья и сарафаны</a></li>
                    <li><a className="page__menu-link" href="#">Толстовки, свитшоты и худи</a></li>
                    <li><a className="page__menu-link" href="#">Туники</a></li>
                    <li><a className="page__menu-link" href="#">Футболки и топы</a></li>
                    <li><a className="page__menu-link" href="#">Халаты</a></li>
                    <li><a className="page__menu-link" href="#">Шорты</a></li>
                    <li><a className="page__menu-link" href="#">Юбки</a></li>
                    <li><a className="page__menu-link" href="#">Белье</a></li>
                    <li><a className="page__menu-link" href="#">Большие размеры</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                  </ul>
                </div>
                <div className="menu__item" id="ct-2">
                  <div className="menu__back">
                    <div className="js-back d-flex gap-2 align-items-center d-md-none">
                              <svg className="icon" width="20px" height="20px">
                                <use xlinkHref="#category-arr"></use>
                              </svg><span className="bold">Назад</span>
                    </div>
                    <div className="page__subtitle">Детские товары</div>
                  </div>
                  <ul>
                    <li className="bold out-grid">Мужчинам</li>
                    <li><a className="page__menu-link" href="#">Блузки и рубашки</a></li>
                    <li><a className="page__menu-link" href="#">Брюки</a></li>
                    <li><a className="page__menu-link" href="#">Верхняя одежда</a></li>
                    <li><a className="page__menu-link" href="#">Джемперы и водолазки</a></li>
                    <li><a className="page__menu-link" href="#">Джинсы</a></li>
                    <li><a className="page__menu-link" href="#">Комбинезоны</a></li>
                    <li><a className="page__menu-link" href="#">Костюмы</a></li>
                    <li><a className="page__menu-link" href="#">Лонгсливы</a></li>
                    <li><a className="page__menu-link" href="#">Пиджаки, жилеты и жакеты</a></li>
                    <li><a className="page__menu-link" href="#">Платья и сарафаны</a></li>
                    <li><a className="page__menu-link" href="#">Толстовки, свитшоты и худи</a></li>
                    <li><a className="page__menu-link" href="#">Туники</a></li>
                    <li><a className="page__menu-link" href="#">Футболки и топы</a></li>
                    <li><a className="page__menu-link" href="#">Халаты</a></li>
                    <li><a className="page__menu-link" href="#">Шорты</a></li>
                    <li><a className="page__menu-link" href="#">Юбки</a></li>
                    <li><a className="page__menu-link" href="#">Белье</a></li>
                    <li><a className="page__menu-link" href="#">Большие размеры</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                  </ul>
                  <ul>
                    <li className="bold out-grid">Женщинам</li>
                    <li><a className="page__menu-link" href="#">Блузки и рубашки</a></li>
                    <li><a className="page__menu-link" href="#">Брюки</a></li>
                    <li><a className="page__menu-link" href="#">Верхняя одежда</a></li>
                    <li><a className="page__menu-link" href="#">Джемперы и водолазки</a></li>
                    <li><a className="page__menu-link" href="#">Джинсы</a></li>
                    <li><a className="page__menu-link" href="#">Комбинезоны</a></li>
                    <li><a className="page__menu-link" href="#">Костюмы</a></li>
                    <li><a className="page__menu-link" href="#">Лонгсливы</a></li>
                    <li><a className="page__menu-link" href="#">Пиджаки, жилеты и жакеты</a></li>
                    <li><a className="page__menu-link" href="#">Платья и сарафаны</a></li>
                    <li><a className="page__menu-link" href="#">Толстовки, свитшоты и худи</a></li>
                    <li><a className="page__menu-link" href="#">Туники</a></li>
                    <li><a className="page__menu-link" href="#">Футболки и топы</a></li>
                    <li><a className="page__menu-link" href="#">Халаты</a></li>
                    <li><a className="page__menu-link" href="#">Шорты</a></li>
                    <li><a className="page__menu-link" href="#">Юбки</a></li>
                    <li><a className="page__menu-link" href="#">Белье</a></li>
                    <li><a className="page__menu-link" href="#">Большие размеры</a></li>
                    <li><a className="page__menu-link" href="#">Будущие мамы</a></li>
                    <li><a className="page__menu-link" href="#">Для высоких</a></li>
                    <li><a className="page__menu-link" href="#">Для невысоких</a></li>
                    <li><a className="page__menu-link" href="#">Одежда для дома</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                    <li><a className="page__menu-link" href="#">Офис</a></li>
                    <li><a className="page__menu-link" href="#">Пляжная мода</a></li>
                    <li><a className="page__menu-link" href="#">Религиозная</a></li>
                    <li><a className="page__menu-link" href="#">Свадьба</a></li>
                    <li><a className="page__menu-link" href="#">Спецодежда и СИЗы</a></li>
                    <li><a className="page__menu-link" href="#">Подарки женщинам</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};