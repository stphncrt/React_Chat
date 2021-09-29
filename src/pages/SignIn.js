import React from "react";
import { Container, Grid, Button, TextField, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import firebase from "../firebase/firebase.utils";
import { Formik } from "formik";
import * as Yup from "yup";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";

const signInValidationSchema = Yup.object().shape({
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.required("Please Enter your password")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
		),
});

const styles = makeStyles((theme) => ({
	wrapper: { marginTop: "5rem", textAlign: "center" },
	avatar: {
		margin: "5rem auto",
		backgroundColor: theme.palette.secondary.main,
	},
}));

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
		firebase.signIn(values.email, values.password);
	};

	return (
		<Container className={signInStyles.wrapper} maxWidth="sm">
			<Avatar className={signInStyles.avatar}>
				<LockOutlinedIcon />
			</Avatar>
			<Typography variant="h4">Sign In</Typography>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSignInSubmit}
				validationSchema={signInValidationSchema}>
				{({ handleSubmit, values, handleChange, errors }) => (
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
									error={errors.email}
									helperText={errors.email}
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
									error={errors.password}
									helperText={errors.password}
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
