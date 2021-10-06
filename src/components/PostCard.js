import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { makeStyles } from "@material-ui/core/styles";
import { capitalizeFirstLetter } from "../helper/Functions";
import moment from "moment";

const styleFunc = makeStyles((theme) => ({
	card: {
		width: "100%",
		height: "28rem",
		margin: "2rem",
	},
}));
export default function PostCard({ owner, publishDate, text, likes, image, tags }) {
	const styles = styleFunc();
	return (
		<Card className={styles.card} sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={
					<Avatar>
						<CardMedia component="img" image={owner.picture} alt="Post Owner" />
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={`${owner.firstName} ${owner.lastName}`}
				subheader={moment(publishDate).format("MMM Do YYYY")}
			/>
			<CardMedia component="img" height="194" image={image} alt="Post" />
			<CardContent>
				<Typography variant="body2" color="text.primary">
					{capitalizeFirstLetter(text)}
				</Typography>
				<Typography mt={2} variant="body1" sx={{ fontWeight: "bold" }}>
					{`#${tags[0]}   #${tags[1]}  #${tags[2]}`}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon sx={{ color: "red" }} /> {likes}
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
			</CardActions>
		</Card>
	);
}

// id: "60d21b9b67d0d8992e610d7d"
// image: "https://img.dummyapi.io/photo-1568034097331-52327e0ad82d.jpg"
// likes: 28
// owner:
// firstName: "Adina"
// id: "60d0fe4f5311236168a109cc"
// lastName: "Barbosa"
// picture: "https://randomuser.me/api/portraits/med/women/28.jpg"
// title: "ms"
// [[Prototype]]: Object
// publishDate: "2020-03-27T23:59:54.470Z"
// tags: Array(3)
// 0: "dog"
// 1: "animal"
// 2: "canine"
// length: 3
// [[Prototype]]: Array(0)
// text: "Follow me on instagram http://instagram.com/mladen..."
