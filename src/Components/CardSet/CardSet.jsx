import Card from "../Card/Card";
import styles from "../CardSet/CardSet.module.css";

export default function CardSet({ cards, returnCard, isClicked }) {
	return (
		<div className={styles["card-set"]}>
			<Card card={cards[0]} returnCard={returnCard} isClicked={isClicked} />
			<Card card={cards[1]} returnCard={returnCard} isClicked={isClicked} />
		</div>
	);
}
