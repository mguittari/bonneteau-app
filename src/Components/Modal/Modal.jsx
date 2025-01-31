import { useState } from "react";
import ButtonModal from "../UI/ButtonModal/ButtonModal";
import styles from "./Modal.module.css";

export default function Modal({ showModal, setShowModal, mode, setMode }) {
	const [data, setData] = useState("freeMode");

	const handleChange = (e) => {
		setData(e.target.value);
		console.log(e.target);
		console.log(e.target.value);
		console.log(showModal);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(data);
		setMode(data);
		setShowModal(!showModal);
	};

	return showModal ? (
		<div className={styles.overlay}>
			<div className={styles.modal}>
				<form onSubmit={handleSubmit} className={styles.form}>
					<legend>Choisissez votre mode de jeu :</legend>
					<div className={styles.radios}>
						<input
							type="radio"
							id="freeMode"
							name="choseMode"
							value="freeMode"
							checked={data === "freeMode"}
							onChange={handleChange}
						/>
						<label htmlFor="freeMode">Mode Libre</label>
						<p className={styles.rules}>
							Pas de règles en mode libre, vous pouvez manipuler les cartes et
							les mélanger comme bon vous semble.
						</p>
						<input
							type="radio"
							id="gameMode"
							name="choseMode"
							value="gameMode"
							checked={data === "gameMode"}
							onChange={handleChange}
						/>
						<label htmlFor="gameMode">Mode Jeu</label>
						<p className={styles.rules}>
							Trouvez l'as de pique et amusez-vous comme un fou (peut-être pas).
						</p>
					</div>
					<ButtonModal />
				</form>
			</div>
		</div>
	) : (
		<div className={styles.modal}>
			<ButtonModal />
		</div>
	);
}
