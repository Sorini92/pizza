import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Buscet from '../../pages/Buscet';
import Home from '../../pages/Home';
import Page404 from '../404/404';

import './app.scss';

function App() {
	return (
		<Router>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home/>} />
					<Route path="/buscet" element={<Buscet/>} />
					<Route path='*' element={<Page404/>}/>
				</Routes>
			</div>
		</Router>
	);
}

export default App;