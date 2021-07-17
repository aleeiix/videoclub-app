import { useState, ChangeEvent, FormEvent } from 'react'
import {
	Card,
	CardContent,
	Container,
	Typography,
	makeStyles,
	Box,
	TextField,
	Button,
} from '@material-ui/core'
import { Link } from 'react-router-dom'

import * as Routes from 'router/routes'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		maxWidth: 338,
	},
	marginBottom: {
		marginBottom: theme.spacing(3),
	},
}))

const Login = () => {
	const classes = useStyles()

	const [user, setUser] = useState<{ email: string; password: string }>({
		email: '',
		password: '',
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value },
		} = e
		setUser({
			...user,
			[name]: value,
		})
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log('🚀 ~ file: index.tsx ~ line 27 ~ Login ~ login', user)
	}

	return (
		<Container component='main' maxWidth='md'>
			<Box display='flex' justifyContent='center' mt={5}>
				<Card component='section' className={classes.root}>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<Typography variant='h5' className={classes.marginBottom}>
								Inicio de sesión
							</Typography>

							<TextField
								label='Correo electrónico'
								value={user.email}
								name='email'
								onChange={handleChange}
								className={classes.marginBottom}
								fullWidth
							/>
							<TextField
								label='Contraseña'
								value={user.password}
								name='password'
								onChange={handleChange}
								type='password'
								className={classes.marginBottom}
								fullWidth
							/>
							<Button variant='contained' color='primary' type='submit' fullWidth>
								Iniciar sesión
							</Button>
						</form>
					</CardContent>
				</Card>
			</Box>

			<Box mt={3}>
				<Typography align='center'>
					¿No tiene ninguna cuenta? <Link to={Routes.REGISTER}>Crear una.</Link>
				</Typography>
			</Box>
		</Container>
	)
}

export default Login
