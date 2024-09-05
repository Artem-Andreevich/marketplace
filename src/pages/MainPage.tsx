
import { PopularItems, Categories } from "../components"


const MainPage = () => {
    return (
        <main className="page main-page">
            <Categories />
            <PopularItems />
        </main>
    );
};

export default MainPage;