import {
	Box,
	Button,
	Card,
	CardContent,
	Container,
	makeStyles,
	TextField,
	Typography,
} from '@material-ui/core'
import { ChangeEvent, FormEvent, useState } from 'react'
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

const Register = () => {
	const classes = useStyles()

	const [newUser, setNewUser] = useState<{
		email: string
		password: string
		repeatPassword: string
	}>({
		email: '',
		password: '',
		repeatPassword: '',
	})

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const {
			target: { name, value },
		} = e
		setNewUser({
			...newUser,
			[name]: value,
		})
	}

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault()
		console.log('🚀 ~ file: index.tsx ~ line 27 ~ Login ~ login', newUser)
	}

	return (
		<Container component='main' maxWidth='md'>
			<Box display='flex' justifyContent='center' mt={5}>
				<Card component='section' className={classes.root}>
					<CardContent>
						<form onSubmit={handleSubmit}>
							<Typography variant='h5' className={classes.marginBottom}>
								Crear cuenta
							</Typography>

							<TextField
								label='Correo electrónico'
								value={newUser.email}
								name='email'
								onChange={handleChange}
								className={classes.marginBottom}
								fullWidth
							/>
							<TextField
								label='Contraseña'
								value={newUser.password}
								name='password'
								onChange={handleChange}
								type='password'
								className={classes.marginBottom}
								fullWidth
							/>
							<TextField
								label='Repite la contraseña'
								value={newUser.repeatPassword}
								name='repeatPassword'
								onChange={handleChange}
								type='password'
								className={classes.marginBottom}
								fullWidth
							/>
							<Button variant='contained' color='primary' type='submit' fullWidth>
								Registrar
							</Button>
						</form>
					</CardContent>
				</Card>
			</Box>

			<Box mt={3}>
				<Typography align='center'>
					¿Ya tienes cuenta creada? <Link to={Routes.LOGIN}>Inicia sesión.</Link>
				</Typography>
			</Box>
		</Container>
	)
}

export default Register
