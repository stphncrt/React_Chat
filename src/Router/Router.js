import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";

import NavBar from "../components/NavBar";

function AppRouter() {
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/register" component={SignUp} />
				<Route exact path="/signIn" component={SignIn} />
				<Route path="/" component={Main} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
