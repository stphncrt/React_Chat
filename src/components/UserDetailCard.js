import * as React from "react";
import Card from "@mui/material/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { DateFormatting, capitalizeFirstLetter } from "../helper/Functions";
import { CircularProgress } from "@mui/material";

// React Chat
// {"id":"60d0fe4f5311236168a109cc","title":"ms","firstName":"Adina","lastName":"Barbosa","picture":"https://randomuser.me/api/portraits/med/women/28.jpg","gender":"female","email":"edina.barbosa@example.com","dateOfBirth":"1952-09-03T13:27:29.424Z","phone":"(64) 5796-9260","location":{"street":"8750, Rua Carlos Gomes","city":"Recife","state":"CearÃ¡","country":"Brazil","timezone":"+1:00"},"registerDate":"2021-06-21T21:02:07.719Z","updatedDate":"2021-06-21T21:02:07.719Z"}

const styleFunc = makeStyles((theme) => ({
	wrapper: {
		width: 1000,
		margin: "15rem",
		marginLeft: "25rem",
	},
	backColor: {
		backgroundColor: theme.palette.grey[200],
	},
	img: {
		width: "100%",
		height: "100%",
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
	const styles = styleFunc();
	return (
		<Card className={styles.wrapper}>
			<Grid className={styles.backColor} container spacing={3}>
				<Grid item xs={12} md={4}>
					<CardMedia className={styles.img} component="img" image={img} alt="green iguana" />
				</Grid>
				<Grid item xs={12} md={4} spacing={3}>
					<CardContent>
						<Typography gutterBottom variant="h4" component="div">
							{capitalizeFirstLetter(userInfo)}
						</Typography>
						<Typography variant="body1" color="text.secondary">
							{`Gender: ${gender}`}
						</Typography>
						<Typography variant="body1" color="text.secondary">
							{`Date of Birth: ${DateFormatting(birthday)}`}
						</Typography>
					</CardContent>
				</Grid>
				<Grid item xs={12} md={4}>
					<CardContent>
						<Typography gutterBottom variant="h4" component="div">
							Address
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{state}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{`State: ${state}`}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{`Street:${street}`}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{`City:${city}`}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{`Country:${country}`}
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</Card>
	);
}
