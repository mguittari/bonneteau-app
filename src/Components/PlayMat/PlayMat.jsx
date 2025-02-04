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
	const [isSpade, setIsSpade] = useState(false);
	const [isClickable, setIsClickable] = useState(false);

	const handleTitleClick = () => {
		window.location.reload();
	};

	const returnLastCard = () => {
		setCards((prevCards) =>
			prevCards.map((card) =>
				card.shape === "spade" ? { ...card, is_face_down: false } : card,
			),
		);
	};

	function resetGame() {
		setAttempt(0);
		setIsClickable(false);
		setIsDisabled(false);
		setIsSpade(false);
		setLedScreen("Où est l'as de pique ?");
	}

	const returnCard = (id) => {
		console.log("id card clicked", id);
		const updatedCards = cards.map((card) => {
			if (card.id === id) {
				if (mode === "gameMode") {
					if (card.shape === "spade") {
						setLedScreen("Bravo :) !!!");
						setIsDisabled(true);
						setIsSpade(true);
						setIsClickable(true);
					} else if (card.shape !== "spade" && attempt === 0) {
						setLedScreen("Essaie encore ;)");
						setAttempt(attempt + 1);
					} else if (card.shape !== "spade" && attempt === 1) {
						setIsDisabled(true);
						setLedScreen("Perdu :(");
						setTimeout(returnLastCard, 2000);
						setIsClickable(true);
					}
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
					<h1
						className={styles.title}
						onClick={handleTitleClick}
						onKeyDown={handleTitleClick}
						title="Cliquez ici pour retourner à l'accueil"
					>
						Bonneteau
					</h1>

					{mode === "gameMode" && (
						<ScreenInformations
							ledScreen={ledScreen}
							isSpade={isSpade}
							attempt={attempt}
							isClickable={isClickable}
							shuffle={shuffle}
							setCards={setCards}
							resetGame={resetGame}
						/>
					)}
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
