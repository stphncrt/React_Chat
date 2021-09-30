import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";
import UserDetailCard from "../components/UserDetailCard";
import DateFormatting from "../helper/DateFormatting";

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
	return (
		<UserDetailCard
			img={userDetail?.picture}
			userInfo={`${userDetail?.title} ${userDetail?.firstName} ${userDetail?.lastName}`}
			gender={userDetail?.gender}
			// birthday={DateFormatting(userDetail?.dateOfBirth)}
			city={userDetail?.location.city}
			state={userDetail?.location.state}
			street={userDetail?.location.street}
			country={userDetail?.location.country}
		/>
	);
}

export default UserDetails;
