import React, { useState, useEffect } from "react";

import { fetchData } from "../helper/FetchData";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@mui/material";

const styleFunc = makeStyles((theme) => ({
	wrapper: {
		display: "flex",
		flexFlow: "row wrap",
		background: theme.palette.grey[200],
		width: "100%",
		justifyContent: "center",
	},
	circular: {
		position: "absolute",
		top: "50%",
		left: "50%",
	},
}));

function Post() {
	const [postData, setPostData] = useState([]);
	const { id } = useParams();
	const styles = styleFunc();
	useEffect(() => {
		fetchData(`user/${id}/post`)
			.then((response) => setPostData(response?.data))
			.catch((error) => console.log(error));
	}, [id]);
	console.log(postData);

	return (
		<Grid className={styles.wrapper}>
			{postData.map((post) => {
				return !postData ? (
					<CircularProgress className={styles.circular} />
				) : (
					<PostCard
						key={post.id}
						owner={post.owner}
						publishDate={post.publishDate}
						text={post.text}
						likes={post.likes}
						image={post.image}
						tags={post.tags}
					/>
				);
			})}
		</Grid>
	);
}
export default Post;
