import Card from "../Card/Card";
import styles from "../CardSet/CardSet.module.css";

export default function CardSet({ cards, returnCard }) {
	return (
		<div className={styles["card-set"]}>
			<Card card={cards[0]} returnCard={returnCard} />
			<Card card={cards[1]} returnCard={returnCard} />
			<Card card={cards[2]} returnCard={returnCard} />
		</div>
	);
}
