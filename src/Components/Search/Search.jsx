import s from './Search.module.scss';
import { Container } from '../Layout/Container/Container';
import { useSelector } from 'react-redux';

export const Search = () => {
	const { openSearch } = useSelector(state => state.search);
	return (
		openSearch && (
			<div className={s.search}>
				<Container>
					<form className={s.form}>
						<input className={s.input} type='search' name='search' placeholder='Найти...' />
						<button className={s.btn} type='submit'>
							Искать
						</button>
					</form>
				</Container>
			</div>
		)
	);
};
