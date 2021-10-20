import { LoginBox, MessageList } from "./components";

import { useAuth } from "./contexts/useAuth";

import styles from "./App.module.scss";
import { SendMessageForm } from "./components/SendMessageForm";

export function App() {
  const { user } = useAuth();

  return (
    <main
      className={`${styles.contentWrapper} ${
        !!user ? styles.contentSigned : ""
      }`}
    >
      <MessageList />
      {!!user ? <SendMessageForm /> : <LoginBox />}
    </main>
  );
}
