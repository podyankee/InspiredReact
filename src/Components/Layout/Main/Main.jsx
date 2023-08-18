import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import s from './Main.module.scss';

export const Main = ({ children }) => {
	const { status } = useSelector(state => state.statusServer);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (!status && location.pathname !== '/404') {
			navigate('/404');
		}
	}, [navigate, status, location]);

	return <div className={s.main}>{children}</div>;
};
