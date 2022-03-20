import { useParams } from 'react-router-dom';

import CardInfo from './CardInfo';
const CardInfoConverter = () => {
	const { id } = useParams();
	return <CardInfo id={id} />;
};

export default CardInfoConverter;
