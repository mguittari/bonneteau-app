import styles from "../ButtonShuffle/ButtonShuffle.module.css";

export default function Button({ cards, setCards, content, shuffle }) {
	const handleClickButton = () => {
		// Étape 1 : Retourner les cartes sans les mélanger
		setCards((prevCards) =>
			prevCards.map((card) => ({ ...card, is_face_down: true })),
		);

		// Étape 2 : Mélanger après 500ms tout en conservant les ID
		setTimeout(() => {
			setCards((prevCards) => {
				// Copier proprement
				const copiedCards = [...prevCards];

				// Mélanger mais en conservant les IDs
				const shuffled = shuffle(copiedCards);

				return shuffled;
			});
		}, 600);
	};

	return (
		<>
			<button
				type="button"
				className={`${styles.button}`}
				onClick={handleClickButton}
			>
				<p className={styles.content}>{content}</p>
			</button>
		</>
	);
}
