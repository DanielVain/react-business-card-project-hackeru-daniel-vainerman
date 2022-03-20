import React, { Component } from 'react';
import { getCard } from '../../services/cardService';
import PageHeader from '../common/pageHeader';

class CardInfo extends Component {
	state = {
		card: {
			title: '',
			description: '',
			image: { url: '', alt: '' },
			address: '',
			phone: '',
			likes: [],
			bizNumber: '',
			createdAt: '',
		},
		errors: {},
		isMount: false,
	};

	async componentDidMount() {
		try {
			const { data } = await getCard(this.props.id);
			this.setState({ card: { ...data }, isMount: true });
		} catch (error) {
			this.setState({ errors: { error: error.message } });
		}
	}

	render() {
		if (this.isMount) return null;
		const { card } = this.state;
		const { error } = this.state.errors;
		if (error) return <span>{error}</span>;
		return (
			<>
				<PageHeader
					title={`${card.title}`}
					subTitle={`${card.description}`}
				/>
				<div className="container">
					<div>
						<img
							src={card.image.url}
							alt={card.image.alt}
							style={{ maxWidth: '400px' }}
						/>
					</div>
					<div>
						<p>
							<strong>Address:</strong> {card.address}
						</p>
						<p>
							<strong>Phone:</strong> {card.phone}
						</p>
						<p>
							<strong>Likes:</strong> {card.likes.length}
						</p>
						<p>
							<strong>Business Number:</strong> {card.bizNumber}
						</p>
						<p>
							<strong>Created At:</strong> {card.createdAt}
						</p>
					</div>
				</div>
			</>
		);
	}
}

export default CardInfo;
