import { PopularItems, Categories } from "../components"

export const MainPage = () => {
    return (
        <main className="page main-page">
            <Categories />
            <PopularItems />
        </main>
    );
};