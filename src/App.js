import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./pages/home/Home";
import Single from "./pages/unit/Single";
import Header from "./components/Header";

function App() {
	return (
		<Router className="App font-nutino">
			<Header />
			<Switch>
				<Route path="/unit/:slug">
					<Single />
				</Route>

				<Route>
					<Home path="/" />
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
