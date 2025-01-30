import { useState } from "react";
import ButtonModal from "../UI/ButtonModal/ButtonModal";
import styles from "./Modal.module.css";

export default function Modal({ showModal, setShowModal, mode, setMode }) {
	const [isDisabled, setIsDisabled] = useState(true);

	const handleClickModal = () => {
		setShowModal(!showModal);
	};

	const handleChange = (event) => {
		setMode(event.target.value);
		console.log(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return showModal ? (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<p>Please choose your game mode :</p>
					<div className={styles.radios}>
						<label htmlFor="freeMode">
							<input
								type="radio"
								id="freeMode"
								name="choseMode"
								value="freeMode"
								checked={mode === "freeMode"}
								onChange={handleChange}
							/>
							Mode Libre
						</label>
						<p className={styles.rules}>
							Pas de règles en mode libre, vous pouvez manipuler les cartes et
							les mélanger comme bon vous semble.
						</p>

						<label htmlFor="gameMode">
							<input
								type="radio"
								id="gameMode"
								name="choseMode"
								value="gameMode"
								checked={mode === "gameMode"}
								onChange={handleChange}
							/>
							Mode Jeu
						</label>
						<p className={styles.rules}>
							Trouvez l'as de pique et amusez-vous comme un fou (peut-être pas).
						</p>
					</div>
				</form>
				<ButtonModal
					handleClickModal={handleClickModal}
					disabled={isDisabled}
					mode={mode}
				/>
			</div>
		</div>
	) : (
		<div className={styles.modal}>
			<ButtonModal />
		</div>
	);
}
