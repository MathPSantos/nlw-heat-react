import styles from "./styles.module.scss";

import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="DoWhile 2021" />

      <ul className={styles.messageList}>
        {[1, 2, 3].map((i) => (
          <li key={i} className={styles.message}>
            <p className={styles.messageContent}>
              Não vejo a hora de começar esse evento, com certeza vai ser o
              melhor de todos os tempos, vamooo pra cima! 🔥🔥
            </p>
            <div className={styles.messageUser}>
              <div className={styles.userImg}>
                <img
                  src="https://github.com/MathPSantos.png"
                  alt="Matheus Santos"
                />
              </div>
              <span>Matheus Santos</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}