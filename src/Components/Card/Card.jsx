import styles from "../Card/Card.module.css";

export default function Card({ cardId, shape }) {
	return (
		<div key={cardId} id={`card-${shape}`} className={styles.card}>
			<div id={styles[shape]} />
		</div>
	);
}
