import { createContext, useState, useEffect } from "react";
import Firebase from "../firebase/firebase.utils";

export const FirebaseAuthContext = createContext();

function AuthContextProvider(props) {
	const [currentUser, setCurrentUser] = useState("");

	useEffect(() => {
		Firebase.firebaseAuth.onAuthStateChanged((user) => {
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
