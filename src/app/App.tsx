import './globalStyles/bootstrap.min.css';
import './globalStyles/reset.css';
import './globalStyles/styles.css';
import './globalStyles/media.css';
import Header from '../layout/Header/Header';
import { createPortal } from 'react-dom';
import Svg from '../layout/Portal/Svg';
import AppRouter from '../routers';

function App() {
	return (
		<>
			{createPortal(
				<Svg />,
				document.body
			)}
			<AppRouter />
		</>
	);
}

export default App;
