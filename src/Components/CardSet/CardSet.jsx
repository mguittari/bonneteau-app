import Card from "../Card/Card";
import styles from "../CardSet/CardSet.module.css";

export default function CardSet({ cards, setCards }) {
	const handleClickCard = (id) => {
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
			<Card card={cards[0]} handleClickCard={handleClickCard} />
			<Card card={cards[1]} handleClickCard={handleClickCard} />
			<Card card={cards[2]} handleClickCard={handleClickCard} />
		</div>
	);
}
