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
	async register(displayName, email, password) {
		try {
			await this.firebaseAuth.createUserWithEmailAndPassword(email, password);
			this.firebaseAuth.currentUser.updateProfile({
				displayName, //displayName : displayName,
			});
		} catch (error) {
			console.log(error);
		}
	}
	useGoogleProvider() {
		const googleProvider = new firebase.auth.GoogleAuthProvider();
		googleProvider.setCustomParameters({ prompt: "select_account" });
		this.firebaseAuth.signInWithPopup(googleProvider);
	}
	signIn(email, password) {
		this.firebaseAuth.signInWithEmailAndPassword(email, password);
	}

	signOut() {
		this.firebaseAuth.signOut();
	}
}

export default new Firebase();
