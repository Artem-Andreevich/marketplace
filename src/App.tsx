import { useEffect, useState } from 'react';
import './App.css';


function App() {

	const [] = useState()

	type User = {
		email: string,
		id: number,
		name: string,
		number: number
	}
	const url = "http://localhost:3001"

	function getUserById(id: number): Promise<{}> {


		return fetch(`${url}/users/`)
			.then( res => res.json() )
			.then( data => data.filter((user: User) => user.id === id))
			// .then( dataUser => console.log(...dataUser))
			.catch( err => { console.log(err) })

	}

	useEffect( (): void => {
		console.log(getUserById(1))
	}, [])

return (
	<div className="App">
		<header className="App-header">
			<h1>Hello marketplace</h1>
		</header>
	</div>
);
}

export default App;
