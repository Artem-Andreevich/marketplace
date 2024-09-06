import AppRouter from '../routers';
import { createPortal } from 'react-dom';
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from 'react-query';
import { store } from '../store';
import { Svg } from "../layout"

import './globalStyles/bootstrap.min.css';
import './globalStyles/reset.css';
import './globalStyles/styles.css';
import './globalStyles/media.css';


const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

export function App() {
	return (
		<>
			{createPortal(
				<Svg />,
				document.body
			)}
			<QueryClientProvider client={queryClient}>
				<Provider store={store}>
					<AppRouter />
				</Provider>
			</QueryClientProvider>
		</>
	);
};