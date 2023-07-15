import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from 'react-router-dom';
import { MainPage } from './Components/MainPage/MainPage.jsx';
import { Root } from './routes/Root.jsx';
import { ErrorPage } from './Components/ErrorPage/ErrorPage.jsx';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchNavigation } from './features/navigationSlice';
import { fetchColors } from './features/colorSlice';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<Root />}>
			<Route index element={<MainPage />} />
			<Route path='catalog/:gender/:category?' element={<MainPage />} />

			<Route path='*' element={<ErrorPage />} />
		</Route>,
	),
);

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNavigation());
		dispatch(fetchColors());
	}, [dispatch]);

	return <RouterProvider router={router}></RouterProvider>;
};
