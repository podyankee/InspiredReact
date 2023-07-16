import { Gender } from './Gender/Gender.jsx';
import { Category } from './Category/Category';
import { Container } from '../../Layout/Container/Container';

export const Navigation = () => (
	<nav>
		<Container>
			<Gender />
			<Category />
		</Container>
	</nav>
);
