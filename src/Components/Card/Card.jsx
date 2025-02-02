import styles from "../Card/Card.module.css";

export default function Card({ card, returnCard, isDisabled }) {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={isDisabled ? null : () => returnCard(card.id)}
			className={`${styles.card} ${card.is_face_down ? styles.faceDown : styles.faceUp}`}
		>
			<div className={styles.cardInner}>
				<div className={styles.cardFront}>
					<div id={styles[card.shape]} />
				</div>
				<div className={styles.cardBack}>
					<div className={styles.design} />
				</div>
			</div>
		</div>
	);
}
