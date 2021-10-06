import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const styleFunc = makeStyles((theme) => ({
	container: {
		height: "30rem",
		"&:hover": {
			boxShadow: "-1px -1px 15px 5px rgba(0,0,0,0.35)",
		},
	},
}));
export default function MediaCard({ id, image, userName, userEmail }) {
	const history = useHistory();
	const styles = styleFunc();
	const HandlePostClick = () => {
		history.push(`/user/${id}/post`);
	};
	const HandleProfileClick = () => {
		history.push(`/user/${id}`);
	};
	return (
		<Card className={styles.container} sx={{ maxWidth: 345 }}>
			<CardActionArea
				onClick={() => {
					history.push(`/user/${id}`);
				}}>
				:
				<CardMedia component="img" height="auto" image={image} alt="green iguana" />
				<CardContent>
					<Typography gutterBottom variant="h5" component="div">
						{userName}
					</Typography>
					<Typography variant="body2" color="text.secondary">
						{userEmail}
					</Typography>
				</CardContent>
			</CardActionArea>

			<CardActions>
				<Button onClick={HandleProfileClick} size="small">
					View Full Profile
				</Button>
				<Button onClick={HandlePostClick} size="small">
					View User Posts
				</Button>
			</CardActions>
		</Card>
	);
}

MediaCard.propTypes = {
	id: PropTypes.string.isRequired,
	image: PropTypes.string,
	userName: PropTypes.string,
	userEmail: PropTypes.string,
};
