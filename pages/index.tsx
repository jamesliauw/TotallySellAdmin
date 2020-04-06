import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import { Typography, Button, Card, CardContent } from '@material-ui/core';
import { Http } from '../lib/http';
import { Layout } from '../components/Layout';

const useStyles: any = makeStyles((theme: Theme): any =>
	createStyles({
		root: {
			textAlign: 'center',
			paddingTop: theme.spacing(8)
		},
		container: {
			width: 480,
			margin: `${theme.spacing(2)}px auto`
		},
		card: {
			padding: theme.spacing(4)
		}
	})
);

const Index: any = ({ user }): any => {
	const classes: any = useStyles({});

	const onClick: any = async (e: React.MouseEvent): Promise<any> => {
		e.preventDefault();
		const http: Http = new Http();
		const response: any = await http.post('api/auth/logout');
		if (response.ok) {
			location.href = '/auth/login';
		}
	};

	return (
		<Layout>
			<div className={classes.root}>
				<div className={classes.container}>
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="body1">You are now logged in as {user.name} :)</Typography>
							<br />
							<Button type="submit" variant="outlined" color="primary" size="large" onClick={onClick}>
								LOGOUT
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</Layout>
	);
};

Index.getInitialProps = async ({ req }): Promise<any> => {
	const { user } = req;

	return {
		user
	};
};

export default Index;
