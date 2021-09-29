import React from "react";
import { Container, Grid, Button, TextField, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styleFunc = makeStyles((theme) => ({
	wrapper: {
		marginTop: "10rem",
		height: "calc(100vh - 19rem)",
		textAlign: "center",
	},
	avatar: {
		margin: "1rem auto",
		backgroundColor: theme.palette.secondary.main,
	},
}));

function Main() {
	const mainStyles = styleFunc();
	return (
		<Container className={mainStyles.wrapper} maxWidth="sm">
			MAIN
		</Container>
	);
}

export default Main;
