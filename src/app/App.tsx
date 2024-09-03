import './globalStyles/bootstrap.min.css';
import './globalStyles/reset.css';
import './globalStyles/styles.css';
import Header from '../layout/Header/Header';
import { createPortal } from 'react-dom';
import Svg from '../layout/Portal/Svg';
import PopularItems from '../components/Popular-items/PopularItems';


function App() {


return (
	<>
		{createPortal(
			<Svg />,
			document.body
		)}
		<main className="page">
			<Header />
			<PopularItems />
		</main>
	</>
);
}

export default App;
