import { useState } from "react";
import CardSet from "../CardSet/CardSet";
import RoundDisplay from "../Round/RoundDisplay";
import ScoreDisplay from "../Score/ScoreDisplay";
import NextRoundButton from "../UI/Button";
import styles from "./PlayMat.module.css";

export default function PlayMat({ cards, setCards, shuffle }) {
	const [nextRound, setNextRound] = useState(false);
	const [counter, setCounter] = useState(0);
	const [round, setRound] = useState(1);
	const [newGame, setNewGame] = useState(false);
	const [isClicked, setIsClicked] = useState(false);

	const returnCard = (id) => {
		const updatedCards = cards.map((card) => {
			if (card.id === id) {
				return {
					...card,
					is_face_down: !card.is_face_down,
				};
			}
			return card;
		});

		setCards(updatedCards);
		setIsClicked(true);

		updatedCards.find((card) => {
			const flippedCard = card.id === id;
			console.log(card);
			console.log("id carte en cours -->", card.id);
			console.log("id carte cliquée -->", id);
			console.log("carte -->", flippedCard);
			if (flippedCard && card.shape === "circle") {
				setNextRound(true);
				setCounter(counter - 1);
			} else if (flippedCard && card.shape === "square") {
				setNextRound(true);
				setCounter(counter + 2);
			}
		});
	};

	const handleNextRound = () => {
		if (round < 10) {
			// Incrémente le tour et continue la partie
			setRound(round + 1);
			setNewGame(false); // La partie continue
		} else {
			// Arrête la partie après 10 tours
			setNewGame(true);
			console.log("Fin de la partie !");
		}
	};

	return (
		<div className={styles["play-mat"]}>
			<CardSet cards={cards} returnCard={returnCard} isClicked={isClicked} />
			<ScoreDisplay counter={counter} />
			<RoundDisplay round={round} />
			{nextRound && (
				<NextRoundButton
					cards={cards}
					setCards={setCards}
					shuffle={shuffle}
					round={round}
					setRound={setRound}
					handleNextRound={handleNextRound}
					setNextRound={setNextRound}
				/>
			)}
		</div>
	);
}
