import styles from "../ButtonModal/ButtonModal.module.css";

export default function ButtonModal({ handleClickModal, isDisabled, mode }) {
	return (
		<button type="button" onClick={handleClickModal} disabled={!mode}>
			<p className={styles["button-modal"]}>Valider</p>
		</button>
	);
}
