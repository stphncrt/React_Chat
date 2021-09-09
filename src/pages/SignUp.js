import React from "react";
import { Button, TextField, Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles({
	wrapper: {
		marginTop: "5rem",
	},
});

function SignUp() {
	const signUpStyles = styles();
	return (
		<Container className={signUpStyles.wrapper} maxWidth="sm">
			<Grid container spacing={3}>
				<Grid item xs={12}>
					<TextField id="outlined-basic" label="Display Name" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={12}>
					<TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={12}>
					<TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" color="primary" fullWidth>
						Submit
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Button variant="contained" color="primary" fullWidth>
						Sign Up With Google
					</Button>
				</Grid>
			</Grid>
		</Container>
	);
}

export default SignUp;
