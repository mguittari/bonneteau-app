import { useState } from "react";
import styles from "../Card/Card.module.css";

export default function Card({ cardId, shape }) {
	const [returnedCard, setReturnedCard] = useState(true);
	const handleClickCard = () => {
		setReturnedCard(!returnedCard);
	};
	return returnedCard ? (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={handleClickCard}
			key={cardId}
			className={`${styles.card} ${styles["returned-card"]}`}
		/>
	) : (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			onClick={handleClickCard}
			key={cardId}
			id={`card-${shape}`}
			className={`${styles.card}`}
		>
			<div id={styles[shape]} />
		</div>
	);
}
