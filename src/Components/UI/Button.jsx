import styles from "./Button.module.css";

export default function Button({ cards, setCards, content, shuffle }) {
	const handleClickButton = () => {
		const resetCards = cards.map((card) => ({
			...card,
			is_face_down: true,
		}));
		const shuffled = shuffle(resetCards);
		setCards(shuffled);
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
