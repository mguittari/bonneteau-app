import CardSet from "../CardSet/CardSet";
import styles from "./PlayMat.module.css";
import ButtonShuffle from "../UI/ButtonShuffle/ButtonShuffle";
import { useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import ScreenInformations from "../ScreenInformations/ScreenInformations";

export default function PlayMat({ cards, setCards, shuffle }) {
	const [showModal, setShowModal] = useState(null);
	const [mode, setMode] = useState("");
	const [ledScreen, setLedScreen] = useState("Où est l'as de pique ?");
	const [isDisabled, setIsDisabled] = useState(false);
	const [attempt, setAttempt] = useState(0);
	console.log("tentative", attempt);

	const returnCard = (id) => {
		const updatedCards = cards.map((card) => {
			if (card.id === id) {
				if (card.shape === "spade") {
					setLedScreen("Bravo !!!");
					setIsDisabled(true);
					console.log("Bravo !!");
				} else if (card.shape !== "spade" && attempt === 0) {
					console.log("Essaie encore");
					setAttempt(attempt + 1);
				} else if (card.shape !== "spade" && attempt === 1) {
					setIsDisabled(true);
					console.log("perdu");
				}
				return {
					...card,
					is_face_down: !card.is_face_down,
				};
			}
			return card;
		});
		setCards(updatedCards);
	};

	useEffect(() => {
		setShowModal(true);
	}, []);

	return (
		<div className={styles["play-mat"]}>
			<div className={styles.border}>
				<div className={styles.header}>
					<h1>Bonneteau</h1>
					{mode === "gameMode" && <ScreenInformations ledScreen={ledScreen} />}
				</div>
				{showModal && (
					<Modal
						showModal={showModal}
						setShowModal={setShowModal}
						mode={mode}
						setMode={setMode}
					/>
				)}
				<CardSet
					cards={cards}
					returnCard={returnCard}
					isDisabled={isDisabled}
				/>
				{mode === "freeMode" ? (
					<ButtonShuffle
						cards={cards}
						setCards={setCards}
						content="Mélange"
						shuffle={shuffle}
					/>
				) : (
					""
				)}
			</div>
		</div>
	);
}
