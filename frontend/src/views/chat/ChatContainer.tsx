import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./ChatContainer.module.css";
import { Message } from "@interfaces/Message";
import Chat from "@components/tchat/Chat";
import ChatInput from "@components/tchat/ChatInput";

// Simuler un appel API pour créer un nouveau chat
const simulateCreateChat = async (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const uuid = Math.random().toString(36).substring(2, 15); // Simuler un UUID
      resolve(uuid);
    }, 500);
  });
};

// Simuler un appel API pour charger un chat existant
const simulateLoadChat = async (chatId: string): Promise<Message[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Simuler des messages pour un chat existant
      const messages: Message[] = [
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
      ];
      resolve(messages);
    }, 500);
  });
};

const ChatContainer: React.FC = () => {
  const { chatId } = useParams<{ chatId?: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  // Charger les messages si un chatId est présent dans l'URL
  useEffect(() => {
    if (chatId) {
      simulateLoadChat(chatId).then((loadedMessages) => {
        setMessages(loadedMessages);
      });
    }
  }, [chatId]);

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: messages.length + 1,
      sender: "user",
      content: message,
    };
    setMessages((prev) => [...prev, userMessage]);

    setIsTyping(true);

    // Simuler une réponse de l'IA
    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        sender: "ai",
        content: "Ceci est une réponse générée automatiquement.",
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);

    if (!chatId) {
      const newChatId = await simulateCreateChat();
      navigate(`/c/${newChatId}`);
    }
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
