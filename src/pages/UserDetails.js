import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchData } from "../helper/FetchData";

function UserDetails() {
	const { id } = useParams();
	const [userDetail, setUserDetail] = useState();
	useEffect(() => {
		fetchData(`/user/${id}`)
			.then((response) => setUserDetail(response))
			.catch()
			.finally();
	}, []);

	return (
		<div>
			<h2>{id}</h2>
		</div>
	);
}

export default UserDetails;
