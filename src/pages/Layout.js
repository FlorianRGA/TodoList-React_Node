import "./../App.css";
import { AppBar, Typography } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
const Layout = () => {
	return (
		<div>
			<AppBar sx={{ position: "static" }}>
				<Link to="/">
					<Typography
						variant="h1"
						sx={{
							textAlign: "center",
							fontSize: "2rem",
							marginTop: "1rem",
							marginBottom: "0.5rem",
						}}
					>
						TODO LIST
					</Typography>
					<Typography
						variant="h2"
						sx={{
							textAlign: "center",
							fontSize: "1.5rem",
							paddingBottom: "1rem",
						}}
					>
						With React.js / Node.js / Material UI
					</Typography>
				</Link>
			</AppBar>
			<Outlet />
		</div>
	);
};
export default Layout;
