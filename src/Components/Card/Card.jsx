import styles from "../Card/Card.module.css";

export default function Card({ card, returnCard, isDisabled }) {
	return card.is_face_down ? (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={() => returnCard(card.id)}
			key={card}
			className={`${styles.card} ${styles["face-down-card"]} ${isDisabled ? styles.disabled : ""}`}
		/>
	) : (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={() => returnCard(card.id)}
			key={card}
			id={`card-${card.shape}`}
			className={`${styles.card} ${styles.disabled}`}
		>
			<div id={styles[card.shape]} />
		</div>
	);
}
