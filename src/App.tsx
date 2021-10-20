import { LoginBox, MessageList } from "./components";

import styles from "./App.module.scss";

export function App() {
  return (
    <main className={styles.contentWrapper}>
      <MessageList />
      <LoginBox />
    </main>
  );
}
