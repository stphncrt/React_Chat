import React from "react";
import { Button, TextField, Grid, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
import Firebase from "../firebase/firebase.utils";
import * as Yup from "yup";
import { useHistory } from "react-router-dom";

const signUpValidationSchema = Yup.object().shape({
	displayName: Yup.string().required("Required"),
	email: Yup.string().email("Invalid email").required("Required"),
	password: Yup.string()
		.required("Please Enter your password")
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
		),
});
const styles = makeStyles({
	wrapper: {
		marginTop: "5rem",
		textAlign: "center",
	},
	text: {
		fontWeight: 700,
		fontFamily:
			"PlusJakartaSans-ExtraBold, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
		color: "#0a1929",
		padding: "1rem",
	},
});
const HandleGoogleButtonClick = () => {
	Firebase.useGoogleProvider();
};
function SignUp() {
	const history = useHistory();
	const signUpStyles = styles();
	const formik = useFormik({
		initialValues: {
			email: "",
			displayName: "",
			password: "",
		},

		validationSchema: signUpValidationSchema,
		onSubmit: (values) => {
			Firebase.register(values.displayName, values.email, values.password);
			history.push("/signIn");
		},
	});
	return (
		<Container className={signUpStyles.wrapper} maxWidth="sm">
			<Typography className={signUpStyles.text} variant="h4">
				Sign Up
			</Typography>

			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={3}>
					<Grid item xs={12}>
						<TextField
							name="displayName"
							id="outlined-basic"
							label="Display Name"
							variant="outlined"
							fullWidth
							value={formik.values.displayName}
							onChange={formik.handleChange}
							error={formik.errors.displayName}
							helperText={formik.errors.displayName}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							name="email"
							id="outlined-basic"
							label="Email"
							variant="outlined"
							fullWidth
							value={formik.values.email}
							onChange={formik.handleChange}
							error={formik.errors.email}
							helperText={formik.errors.email}
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
							value={formik.values.password}
							onChange={formik.handleChange}
							error={formik.errors.password}
							helperText={formik.errors.password}
						/>
					</Grid>
					<Grid item xs={12}>
						<Button type="submit" variant="contained" color="primary" fullWidth>
							Submit
						</Button>
					</Grid>
					<Grid item xs={12}>
						<Button variant="contained" color="primary" fullWidth onClick={HandleGoogleButtonClick}>
							Sign Up With Google
						</Button>
					</Grid>
				</Grid>
			</form>
		</Container>
	);
}

export default SignUp;
