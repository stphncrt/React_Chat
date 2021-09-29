import React, { useEffect, useState } from "react";
import { Container, Grid, capitalize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MediaCard from "../components/MediaCard";

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
	const [userList, setUserList] = useState();
	const { REACT_APP_BASE_URL, REACT_APP_API_TOKEN } = process.env;

	const fetchData = async () => {
		const response = await axios.get(`${REACT_APP_BASE_URL}user`, {
			headers: {
				"app-id": REACT_APP_API_TOKEN,
			},
		});
		setUserList(response?.data?.data);
		console.log(response?.data?.data);
	};
	useEffect(() => {
		fetchData();
	}, []);

	const mainStyles = styleFunc();
	return (
		<Container className={mainStyles.wrapper}>
			<Grid container spacing={5}>
				{userList?.map((user) => {
					return (
						<Grid key={user?.id} item xs={3}>
							<MediaCard
								id={user?.id}
								userName={`${capitalize(user?.title)} ${user?.firstName} ${user.lastName} `}
								userEmail={user?.email}
								image={user?.picture}
							/>
						</Grid>
					);
				})}
			</Grid>
		</Container>
	);
}

export default Main;
