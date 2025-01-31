import React from 'react';
import styles from './Chat.module.css';

interface Message {
  id: number;
  sender: "user" | "ai";
  content: string;
}

interface ChatProps {
  messages: Message[];
  isTyping: boolean;
}

const Chat: React.FC<ChatProps> = ({ messages, isTyping }) => {
  return (
    <div className={styles.chat}>
      {messages.map((message) => (
        <div
          key={message.id}
          className={`${styles.message} ${
            message.sender === "user" ? styles.userMessage : styles.aiMessage
          }`}
        >
          {message.content}
        </div>
      ))}
      {isTyping && <div className={styles.typingIndicator}>Typing...</div>}
    </div>
  );
};

export default Chat;
