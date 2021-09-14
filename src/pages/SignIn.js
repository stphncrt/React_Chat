import React from "react";
import { Container, Grid, Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";

const styles = makeStyles({
	wrapper: { marginTop: "5rem" },
});

function SignIn() {
	const signInStyles = styles();
	const handleGoogleButtonClick = () => {
		firebase.useGoogleProvider();
	};

	const initialValues = {
		email: "",
		password: "",
	};

	const handleSignInSubmit = (values) => {
		alert(JSON.stringify(values, null, 2));
	};

	return (
		<Container className={signInStyles.wrapper} maxWidth="sm">
			<Formik initialValues={initialValues} onSubmit={handleSignInSubmit}>
				{({ handleSubmit, values, handleChange }) => (
					<form onSubmit={handleSubmit}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<TextField
									name="email"
									id="outlined-basic"
									label="Email"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									value={values.email}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									name="password"
									type="password"
									id="outlined-basic"
									label="Password"
									variant="outlined"
									fullWidth
									onChange={handleChange}
									value={values.password}
								/>
							</Grid>
							<Grid item xs={12}>
								<Button
									type="submit"
									variant="contained"
									color="primary"
									fullWidth
									onClick={handleSignInSubmit}>
									Sign in
								</Button>
							</Grid>
							<Grid item xs={12}>
								<Button
									variant="contained"
									color="primary"
									fullWidth
									onClick={handleGoogleButtonClick}>
									Sign In With Google
								</Button>
							</Grid>
						</Grid>
					</form>
				)}
			</Formik>
		</Container>
	);
}

export default SignIn;
