import s from './Banner.module.scss';
import { Container } from '../Layout/Container/Container';
import { NavLink } from 'react-router-dom';
import { API_URL } from '../../const';
import { useEffect, useState } from 'react';

export const Banner = ({ data }) => {
	const [bgURL, setBgURL] = useState('');

	useEffect(() => {
		const foo = () => {
			const width = document.documentElement.clientWidth;
			if (width < 540) {
				setBgURL(`${API_URL}${data?.bg.mobile}`);
			} else if (width < 768) {
				setBgURL(`${API_URL}${data?.bg.tablet}`);
			} else if (width < 1024) {
				setBgURL(`${API_URL}${data?.bg.laptop}`);
			} else {
				setBgURL(`${API_URL}${data?.bg.desktop}`);
			}
		};

		window.addEventListener('resize', foo);
		foo();
		return () => {
			window.removeEventListener('resize', foo);
		};
	}, [data]);
	return (
		data && (
			<section
				className={s.banner}
				style={{
					backgroundImage: `url(${bgURL})`,
				}}>
				<Container>
					<div className={s.content}>
						<h2 className={s.title}>{data.description}</h2>
						<NavLink className={s.link} to={`/product/${data.id}`}>
							Перейти
						</NavLink>
					</div>
				</Container>
			</section>
		)
	);
};
