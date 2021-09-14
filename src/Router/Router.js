import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignIn";
import SignIn from "../pages/SignUp";

import NavBar from "../components/NavBar";

function AppRouter() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route path="/register" component={SignUp} />
				<Route path="/signIn" component={SignIn} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
