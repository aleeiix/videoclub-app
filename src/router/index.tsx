import { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import * as Routes from './routes'

const Home = lazy(() => import('views/Home'))
const Login = lazy(() => import('views/Login'))
const Register = lazy(() => import('views/Register'))

const Router = () => {
	return (
		<Suspense fallback={<p>Loading</p>}>
			<BrowserRouter>
				<Switch>
					<Redirect path={Routes.ROOT} to={Routes.HOME} exact />

					<Route path={Routes.LOGIN} component={Login} exact />
					<Route path={Routes.REGISTER} component={Register} exact />
					<Route path={Routes.HOME} component={Home} exact />
				</Switch>
			</BrowserRouter>
		</Suspense>
	)
}

export default Router
