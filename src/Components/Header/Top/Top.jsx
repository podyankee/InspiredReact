import { Container } from '../../Layout/Container/Container.jsx';
import s from './Top.module.scss';
import cn from 'classnames';
import logo from '/src/assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { ReactComponent as LikeSVG } from '../../../assets/heart.svg';
import { ReactComponent as CartSVG } from '../../../assets/cart.svg';
import { ReactComponent as SearchSVG } from '../../../assets/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSearch } from '../../../features/searchSlice';

export const Top = () => {
	const { countItems } = useSelector(state => state.cart);
	const dispatch = useDispatch();

	const handleOpenSearch = () => {
		dispatch(toggleSearch());
	};
	return (
		<div className={s.top}>
			<Container className={s.topContainer}>
				<a href='tel:89304902620' className={cn(s.topLink, s.topPhone)}>
					8 930 490 26 20
				</a>
				<NavLink className={s.topLogo} to='/'>
					<img src={logo} alt='Логотип Inspired' />
				</NavLink>
				<div className={s.topNavigation}>
					<ul className={s.topNavList}>
						<li className={s.navItem}>
							<button className={s.topLink} onClick={handleOpenSearch}>
								<SearchSVG />
							</button>
						</li>
						<li className={s.navItem}>
							<NavLink to='/cart' className={s.topLink}>
								<CartSVG />
								<span className={s.topLinkCount}>{countItems}</span>
							</NavLink>
						</li>
						<li className={s.navItem}>
							<NavLink to='/favorite' className={cn(s.topLink, s.like)}>
								<LikeSVG />
							</NavLink>
						</li>
					</ul>
				</div>
			</Container>
		</div>
	);
};
