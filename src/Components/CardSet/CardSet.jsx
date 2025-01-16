import Card from "../Card/Card";
import styles from "../CardSet/CardSet.module.css";

export default function CardSet({ figures }) {
	return (
		<div className={styles["card-set"]}>
			<Card cardId={figures[0].id} shape={figures[0].shape} />
			<Card cardId={figures[1].id} shape={figures[1].shape} />
			<Card cardId={figures[2].id} shape={figures[2].shape} />
		</div>
	);
}
