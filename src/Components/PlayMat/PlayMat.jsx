import CardSet from "../CardSet/CardSet";
import styles from "./PlayMat.module.css";
import ShuffleButton from "../UI/Button";

export default function PlayMat({ cards, setCards, shuffle }) {
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
		<div className={styles["play-mat"]}>
			<div className={styles.border}>
				<div className={styles.header}>
					<p className={styles.author}>Mattias Guittari présente</p>
					<h1>Bonneteau</h1>
				</div>

				<CardSet cards={cards} returnCard={returnCard} />
				<ShuffleButton
					cards={cards}
					setCards={setCards}
					content="Mélange"
					shuffle={shuffle}
				/>
			</div>
		</div>
	);
}
