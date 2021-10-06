import React, { useEffect, useState } from "react";
import { Grid, capitalize, CircularProgress } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import MediaCard from "../components/MediaCard";

const styleFunc = makeStyles((theme) => ({
	container: {
		display: "flex",
		flexFlow: "row wrap",
		background: theme.palette.grey[200],
		width: "100%",
	},
	avatar: {
		margin: "1rem auto",
		backgroundColor: theme.palette.secondary.main,
	},

	circular: {
		margin: "25rem",
		marginLeft: "55rem",
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
	return !userList ? (
		<CircularProgress className={mainStyles.circular} />
	) : (
		<div className={mainStyles.container}>
			<Grid container>
				{userList.map((user) => {
					return (
						<Grid key={user?.id} item xs={3}>
							<MediaCard
								id={user?.id}
								userName={`${capitalize(user?.title)} ${user?.firstName} ${user?.lastName} `}
								userEmail={user?.email}
								image={user?.picture}
							/>
						</Grid>
					);
				})}
			</Grid>
		</div>
	);
}

export default Main;
