
import PopularItems from '../components/Popular-items/PopularItems';
import Categories from '../components/Categories/Categories';


const MainPage = () => {
    return (
        <main className="page main-page">
            <Categories />
            <PopularItems />
        </main>
    );
};

export default MainPage;