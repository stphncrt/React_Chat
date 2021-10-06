import React, { useState, useEffect } from "react";

import { fetchData } from "../helper/FetchData";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import { Grid, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styleFunc = makeStyles((theme) => ({
	wrapper: {
		display: "flex",
		flexFlow: "row wrap",
		background: theme.palette.grey[200],
		width: "100%",
		justifyContent: "center",
	},
	postCard: {
		height: "40rem",
		margin: "0.3rem",
		width: "23%",
		border: "1px solid",
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
				return (
					<PostCard
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
