import * as React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { capitalizeFirstLetter } from "../helper/Functions";
import SendIcon from "@mui/icons-material/Send";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import moment from "moment";

const styleFunc = makeStyles((theme) => ({
	wrapper: {
		border: "3px solid",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: "2",
		width: "50%",
	},

	postTypo: {
		marginTop: "3rem",
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: "2px",
		"&:hover": {
			transform: "scale(1.03)",
		},
	},
}));
export default function UserDetailCard({
	userInfo,
	gender,
	birthday,
	street,
	city,
	state,
	country,
	img,
}) {
	const { id } = useParams();
	const history = useHistory();
	const styles = styleFunc();
	function HandlePostClick() {
		history.push(`${id}/post`);
	}
	return (
		<Card className={styles.wrapper}>
			<Grid className={styles.backColor} container spacing={3}>
				<Grid item xs={12} md={4}>
					<CardMedia className={styles.img} component="img" image={img} alt="green iguana" />
				</Grid>
				<Grid item xs={12} md={4} spacing={3}>
					<CardContent>
						<Typography mb={1} gutterBottom variant="h4" component="div">
							{capitalizeFirstLetter(userInfo)}
						</Typography>
						<Typography variant="body1" color="textprimary">
							{`Gender: ${capitalizeFirstLetter(gender)}`}
						</Typography>
						<Typography variant="body1" color="textprimary">
							{`Date of Birth: ${moment(birthday).format("DD MM YYYY")}`}
						</Typography>
						<div onClick={HandlePostClick} className={styles.postTypo}>
							<Typography sx={{ fontWeight: "bold" }}>Posts</Typography>
							<SendIcon />
						</div>
					</CardContent>
				</Grid>
				<Grid item xs={12} md={4}>
					<CardContent>
						<Typography mb={1} gutterBottom variant="h4" component="div">
							Address
						</Typography>

						<Typography mb={1} variant="body1">
							{`State: ${state}`}
						</Typography>
						<Typography mb={1} variant="body1" color="text.primary">
							{`Street: ${street}`}
						</Typography>
						<Typography mb={1} variant="body1" color="textprimary">
							{`City: ${city}`}
						</Typography>
						<Typography mb={1} variant="body1" color="textprimary">
							{`Country: ${country}`}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
}
