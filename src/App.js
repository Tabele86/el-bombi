import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Enter from './pages/Enter';
import Stats from './pages/Stats';
import Highlights from './pages/Highlights';

// import NavBar from './components/NavBar';

function App() {
	return (
		<Router>
			{/* <NavBar /> */}
			<Switch>
				<Route component={Enter} path="/" exact />
				<Route component={Home} path="/home" />
				<Route component={Stats} path="/stats" />
				<Route component={Highlights} path="/highlights" exact />
			</Switch>
		</Router>
	);
}

export default App;
