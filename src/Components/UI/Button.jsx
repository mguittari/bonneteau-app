import styles from "./Button.module.css";

export default function Button({
	cards,
	setCards,
	shuffle,
	round,
	setRound,
	handleNextRound,
	setNextRound,
}) {
	const handleClick = () => {
		// Remettre toutes les cartes face cachée
		const resetCards = cards.map((card) => ({
			...card,
			is_face_down: true,
		}));

		// Mélanger les cartes après les avoir remises face cachée
		const shuffled = shuffle(resetCards);

		// Mettre à jour l'état avec les cartes mélangées
		setCards(shuffled);
		setNextRound(false);
		handleNextRound();
		setIsClicked(true);
	};

	return (
		<button className={styles.button} type="button" onClick={handleClick}>
			<p>Next round</p>
		</button>
	);
}
