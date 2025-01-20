import styles from "./Button.module.css";

export default function Button({ cards, setCards, content, shuffle }) {
	const handleClick = () => {
		const resetCards = cards.map((card) => ({
			...card,
			is_face_down: true,
		}));

		// Mélanger les cartes après les avoir remises face cachée
		const shuffled = shuffle(resetCards);

		// Mettre à jour l'état avec les cartes mélangées
		setCards(shuffled);
	};
	return (
		<>
			<button
				type="button"
				className={`${styles.button} ${styles.button_top}`}
				onClick={handleClick}
			>
				<p className={styles.content}>{content}</p>
			</button>
		</>
	);
}
