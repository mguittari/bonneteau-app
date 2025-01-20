import styles from "./Button.module.css";

export default function Button({
	cards,
	setCards,
	shuffle,
	handleNextRound,
	setNextRound,
	textButton,
	setIsDisabled,
	isDisabled,
}) {
	const endGameClick = () => {
		if (textButton === "End Game") {
			setCards([
				{ id: 1, shape: "circle", is_face_down: false },
				{ id: 2, shape: "square", is_face_down: false },
			]);
			setIsDisabled(true);
		}
	};

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
		setIsDisabled(false);
		endGameClick();
	};

	return (
		<button className={styles.button} type="button" onClick={handleClick}>
			<p>{textButton}</p>
		</button>
	);
}
