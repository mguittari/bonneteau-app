import Card from "../Card/Card";
import styles from "../CardSet/CardSet.module.css";

export default function CardSet() {
	return (
		<div className={styles["card-set"]}>
			<Card />
			<Card />
			<Card />
		</div>
	);
}
