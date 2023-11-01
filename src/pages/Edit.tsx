import { Box, TextField, Button,Container,CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import { update_user } from "../actions/update_user";
import { UserType } from "../types/User_Type";
import { useState } from "react";

const defaultTheme = createTheme();

export const Edit = () => {
	const navigate = useNavigate();

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const data = new FormData(event.currentTarget);
		const updatedFormData: UserType = {
			id: "" as string,
			email: data.get("email") as string,
			password: data.get("password") as string,
			name: data.get("name") as string,
			phone: data.get("phone") as string,
		};
		try {
	// 		const response = await create_user(updatedFormData);
    //   const newUser = response.data;
			// const updatedUserListResponse = await get_users();
			// if (updatedUserListResponse.status === 200) {
        // setUsers((prevUsers) => [...prevUsers, newUser]);
			// }
			navigate("/loged");
		} catch (error) {
			console.error("Error creating user:", error);
		}

	};
	return (
		<ThemeProvider theme={defaultTheme}>
			<Container component="main" maxWidth="xs">
				<CssBaseline />
				<Box
					sx={{
						marginTop: 8,
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					
			
					<Box
						component="form"
						onSubmit={handleSubmit}
						noValidate
						sx={{ mt: 1 }}
					>
						<TextField
							margin="normal"
							required
							fullWidth
							id="email"
							label="Email Address"
							name="email"
							autoComplete="email"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							name="password"
							label="Password"
							type="password"
							id="password"
							autoComplete="current-password"
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="name"
							label="Full Name"
							name="name"
							autoComplete="name"
							autoFocus
						/>
						<TextField
							margin="normal"
							required
							fullWidth
							id="phone"
							label="Phone Number"
							name="phone"
							autoComplete="phone"
							autoFocus
						/>
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{ mt: 3, mb: 2 }}
						>
							Sign Up
						</Button>
					</Box>
				</Box>
			</Container>
		</ThemeProvider>
	);
};
