import s from './Product.module.scss';
import { API_URL } from '../../const';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Like } from '../../assets/heart.svg';
import { ColorList } from '../ColorList/ColorList';

export const Product = ({ id, pic, title, price, colors }) => (
	<article className={s.product}>
		<NavLink href={`product/${id}`} className={s.link}>
			<img className={s.image} src={`${API_URL}${pic}`} />
			<h3 className={s.title}>{title}</h3>
		</NavLink>
		<div className={s.row}>
			<p className={s.price}>руб {price}</p>
			<button className={s.favorite}>
				<Like />
			</button>
			<ColorList colors={colors} />
		</div>
	</article>
);