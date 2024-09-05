import './globalStyles/bootstrap.min.css';
import './globalStyles/reset.css';
import './globalStyles/styles.css';
import './globalStyles/media.css';
import Header from '../layout/Header/Header';
import { createPortal } from 'react-dom';
import Svg from '../layout/Portal/Svg';
import AppRouter from '../routers';
import { Provider } from "react-redux"
import { store } from '../store';

function App() {
	return (
		<>
			{createPortal(
				<Svg />,
				document.body
			)}
			<Provider store={store}>
				<AppRouter />
			</Provider>
		</>
	);
}

export default App;
