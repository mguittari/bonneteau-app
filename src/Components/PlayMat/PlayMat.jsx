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
	const [isClicked, setIsClicked] = useState(false);
	const [textButton, setTextButton] = useState("Next Round");
	const [modal, setModal] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

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
				setIsDisabled(true);
			} else if (flippedCard && card.shape === "square") {
				setNextRound(true);
				setCounter(counter + 2);
				setIsDisabled(true);
			}
		});
	};

	const handleNextRound = () => {
		if (round < 9) {
			// Incrémente le tour et continue la partie
			setRound(round + 1);
		} else {
			// Arrête la partie après 10 tours
			setRound(10);
			setTextButton("End Game");
		}
		if (textButton === "End Game") {
			setModal(true);
		}
	};

	return (
		<div className={styles["play-mat"]}>
			<CardSet cards={cards} returnCard={returnCard} isDisabled={isDisabled} />
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
					textButton={textButton}
					setIsDisabled={setIsDisabled}
				/>
			)}
			{modal && <p>MODAL FIN DE PARTIE</p>}
		</div>
	);
}
