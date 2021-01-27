import react from "react";
import { Formik, Form, Field } from "formik";
import Box from "@material-ui/core/Box";
import { TextField, Switch } from "formik-material-ui";
import { Button, Typography, Grid, Input, InputLabel, InputAdornment } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LockIcon from "@material-ui/icons/Lock";
import Head from "next/head";

interface Values {
	username: string;
	password: string;
}

function Login() {
	const loginPageStyle = {
		margin: "32px auto 37px",
		// maxWidth: "530px",
		background: "#fff",
		padding: "0.5rem",
		borderRadius: "0.2rem",
		boxShadow: "0px 0px 10px 10px rgba(0,0,0,0.15)",
	};

	return (
		<div>
			<Head>
				<title>Login titles</title>
				<link rel="icon" href="/Ramesh.ico" />
			</Head>
			<Grid container direction="row" justify="center" alignItems="center">
				<Grid item xs={12} sm={4}></Grid>
				<Grid item xs={12} sm={4} alignItems="center">
					<Box sx={{ border: "1px solid grey" }} className="loginPageStyle">
						<h2>Login</h2>
						<h3>Added by sandeep k</h3>
						<Formik
							initialValues={{
								username: "",
								password: "",
							}}
							validate={(values) => {
								const errors: Partial<Values> = {};
								if (!values.username) {
									errors.username = "Please enter Usernames";
								}
								if (!values.password) {
									errors.password = "Please enter Password";
								}
								//   else if (
								//     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
								//   ) {
								//     errors.username = 'Invalid email address';
								//   }
								return errors;
							}}
							onSubmit={(values, { setSubmitting }) => {
								setTimeout(() => {
									setSubmitting(false);
									alert(JSON.stringify(values, null, 2));
								}, 500);
							}}
						>
							{({ submitForm, isSubmitting, touched, errors }) => (
								<Form>
									<Field
										style={{ margin: "0.5rem", padding: "7.5px 15px" }}
										component={TextField}
										name="username"
										type="text"
										label="Username"
										//   helperText="Please Enter Username"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<AccountCircleIcon />
												</InputAdornment>
											),
										}}
									/>

									<Field
										style={{ margin: "0.5rem", padding: "7.5px 15px" }}
										component={TextField}
										type="password"
										label="Password"
										name="password"
										InputProps={{
											startAdornment: (
												<InputAdornment position="start">
													<LockIcon />
												</InputAdornment>
											),
										}}
									/>
									<br></br>
									<Button variant="contained" color="primary" disabled={isSubmitting} onClick={submitForm}>
										Submit
									</Button>
								</Form>
							)}
						</Formik>
					</Box>
				</Grid>
				<Grid item xs={12} sm={4}></Grid>
			</Grid>
		</div>
	);
}

export default Login;
