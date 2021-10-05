import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";
import UserDetailCard from "../components/UserDetailCard";
import { makeStyles } from "@material-ui/core/styles";

import { CircularProgress } from "@mui/material";
const styleFunc = makeStyles((theme) => ({
	circular: {
		margin: "25rem",
		marginLeft: "55rem",
	},
}));
function UserDetails() {
	const { id } = useParams();
	const [userDetail, setUserDetail] = useState();
	useEffect(() => {
		fetchData(`user/${id}`)
			.then((response) => setUserDetail(response))
			.catch()
			.finally();
	}, [id]);
	console.log(userDetail);
	const styles = styleFunc();
	return (
		<>
			{!userDetail ? (
				<CircularProgress className={styles.circular} />
			) : (
				<UserDetailCard
					img={userDetail.picture}
					userInfo={`${userDetail.title} ${userDetail.firstName} ${userDetail.lastName}`}
					gender={userDetail.gender}
					birthday={userDetail.dateOfBirth}
					city={userDetail.location.city}
					state={userDetail.location.state}
					street={userDetail.location.street}
					country={userDetail.location.country}
				/>
			)}
		</>
	);
}

export default UserDetails;
