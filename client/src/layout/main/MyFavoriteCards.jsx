import { getCurrentUser } from '../../services/userService';
import CardExtends from '../common/Cards/CardExtends';
import PageHeader from '../common/pageHeader';
import Cards from '../common/Cards/cards';

class MyFavoriteCards extends CardExtends {
	state = { data: [], cards: [], likedCards: [], errors: {}, isMount: false };

	user = getCurrentUser();
	async componentDidMount() {
		const data = await this.getLikedCards(this.user);
		this.setState({ data, likedCards: data, isMount: true });
	}

	render() {
		const { likedCards, isMount } = this.state;
		if (!isMount) return <div>No liked Cards!</div>;

		return (
			<>
				<PageHeader
					title="My Favorite Cards"
					subTitle="Here you can find your favorited cards"
				/>
				<div className="container">
					<Cards
						cards={likedCards}
						changeLikeStatus={this.changeLikeStatus}
						handleDelete={this.handleDelete}
					/>
				</div>
			</>
		);
	}
}

export default MyFavoriteCards;
