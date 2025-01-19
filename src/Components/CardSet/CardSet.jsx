import Card from "../Card/Card";
import styles from "../CardSet/CardSet.module.css";

export default function CardSet({ cards, setCards }) {
	console.log(cards);
	const returnCard = (id) => {
		const updatedCards = cards.map((card) => {
			if (card.id === id) {
				return {
					...card,
					is_face_down: !card.is_face_down,
				};
			}
			return card;
		});
		setCards(updatedCards);
	};
	return (
		<div className={styles["card-set"]}>
			<Card card={cards[0]} returnCard={returnCard} />
			<Card card={cards[1]} returnCard={returnCard} />
			<Card card={cards[2]} returnCard={returnCard} />
		</div>
	);
}
