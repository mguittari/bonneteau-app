import styles from "../ButtonShuffle/ButtonShuffle.module.css";

export default function Button({ content, handleClickShuffle }) {
	return (
		<>
			<button
				type="button"
				className={`${styles.button}`}
				onClick={handleClickShuffle}
			>
				<p className={styles.content}>{content}</p>
			</button>
		</>
	);
}
