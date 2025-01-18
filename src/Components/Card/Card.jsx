import styles from "../Card/Card.module.css";

export default function Card({ card, handleClickCard }) {
	return card.is_face_down ? (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={() => handleClickCard(card.id)}
			key={card}
			className={`${styles.card} ${styles["face-down-card"]}`}
		/>
	) : (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={() => handleClickCard(card.id)}
			key={card}
			id={`card-${card.shape}`}
			className={`${styles.card}`}
		>
			<div id={styles[card.shape]} />
		</div>
	);
}
