import firebase from "firebase/app";
import "firebase/auth";

const devConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSAGE_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};

const prodConfig = null;

const config = process.env.NODE_ENV === "development" ? devConfig : prodConfig;

class Firebase {
	constructor() {
		firebase.initializeApp(config);
		this.firebaseAuth = firebase.auth();
	}
	register(email, password) {
		this.firebaseAuth.createUserWithEmailAndPassword(email, password);
	}
	useGoogleProvider() {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
		googleProvider.setCustomParameters({ prompt: "select_account" });
		this.firebaseAuth.signInWithPopup(googleProvider);
	}
	signOut() {
		this.firebaseAuth.signOut();
	}
}

export default new Firebase();
