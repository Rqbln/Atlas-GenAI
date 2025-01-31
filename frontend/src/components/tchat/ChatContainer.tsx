import React, { useState } from "react";
import Chat from "./Chat";
import ChatInput from "./ChatInput";
import styles from "./ChatContainer.module.css";

interface Message {
  id: number;
  sender: "user" | "ai";
  content: string;
}

const ChatContainer: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "ai",
      content: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
    },
    {
      id: 2,
      sender: "user",
      content: "Pouvez-vous m'aider avec ma commande ?",
    },
    {
      id: 3,
      sender: "ai",
      content: "Bien sûr ! Quel est le problème avec votre commande ?",
    },
    { id: 4, sender: "user", content: "Je n'ai pas reçu ma commande." },
    {
      id: 5,
      sender: "ai",
      content:
        "Je suis désolé d'entendre cela. Pouvez-vous me donner votre numéro de commande ?",
    },
    { id: 6, sender: "user", content: "Oui, c'est le 12345." },
    { id: 7, sender: "ai", content: "Merci. Je vais vérifier cela pour vous." },
    { id: 8, sender: "user", content: "Merci." },
    {
      id: 9,
      sender: "ai",
      content:
        "Votre commande est en cours de livraison et devrait arriver demain.",
    },
    { id: 10, sender: "user", content: "Parfait, merci beaucoup !" },
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: message,
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: "ai",
        content: "Ceci est une réponse générée automatiquement.",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.chatMessages}>
        <Chat messages={messages} isTyping={isTyping} />
      </div>
      <div className={styles.chatInput}>
        <ChatInput onSendMessage={handleSendMessage} isLoading={isTyping} />
      </div>
    </div>
  );
};

export default ChatContainer;
