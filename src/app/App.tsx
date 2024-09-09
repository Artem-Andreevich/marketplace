import AppRouter from '../routers';
import { createPortal } from 'react-dom';
import { Provider } from "react-redux"
import { store } from '../store/store';
import { Svg } from "../layout"

import './globalStyles/bootstrap.min.css';
import './globalStyles/reset.css';
import './globalStyles/styles.css';
import './globalStyles/media.css';


export function App() {
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
};