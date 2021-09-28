import { createContext, useState, useEffect } from "react";
import Firebase from "../firebase/firebase.utils";

export const FirebaseAuthContext = createContext();

function AuthContextProvider(props) {
	const [isauthenticated, setauthenticated] = useState(false);
	const [currentUser, setCurrentUser] = useState("");

	useEffect(() => {
		Firebase.firebaseAuth.onAuthStateChanged((user) => {
			console.log(user);
			setCurrentUser(user);
		});
	}, []);

	return (
		<FirebaseAuthContext.Provider value={{ currentUser }}>
			{props.children}
		</FirebaseAuthContext.Provider>
	);
}

export { AuthContextProvider };
