/* Components */
import HomePage from './components/HomePage';
import Navbar from './components/Navbar'

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="container">
				<HomePage />
			</div>
		</div>
	);
}

export default App;
