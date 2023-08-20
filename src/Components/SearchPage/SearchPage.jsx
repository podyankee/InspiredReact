import { Goods } from '../Goods/Goods';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAll } from '../../features/goodsSlice';
import s from './SearchPage.module.scss';
import { useSearchParams } from 'react-router-dom';

export const SearchPage = () => {
	const { goodsList } = useSelector(state => state.goods);

	const dispatch = useDispatch();

	let [searchParams] = useSearchParams();

	useEffect(() => {
		const search = searchParams.get('q');
		const params = { search };
		dispatch(fetchAll(params));
	}, [searchParams, dispatch]);

	return goodsList.length ? (
		<Goods title='Результаты поиска' />
	) : (
		<h3 className={s.empty}>По вашему запросу {searchParams.get('q')} ничего не найдено</h3>
	);
};
