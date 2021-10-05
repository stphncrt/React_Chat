import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../pages/SignUp";
import SignIn from "../pages/SignIn";
import Main from "../pages/Main";
import UserDetails from "../pages/UserDetails";
import { useContext } from "react";

import NavBar from "../components/NavBar";
import { FirebaseAuthContext } from "../context/AuthContext";

function AppRouter() {
	const { currentUser } = useContext(FirebaseAuthContext);
	return (
		<Router>
			<NavBar />
			<Switch>
				<Route exact path="/register" component={SignUp} />
				<Route exact path="/signIn" component={currentUser ? Main : SignIn} />
				<Route exact path="/user/:id" component={currentUser ? UserDetails : SignIn} />
				<Route path="/" component={Main} />
			</Switch>
		</Router>
	);
}

export default AppRouter;
