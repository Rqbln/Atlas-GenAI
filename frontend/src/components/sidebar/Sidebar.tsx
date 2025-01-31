import React, { useState } from "react";
import styles from "./Sidebar.module.css";
import Icon from "@icon";
import ChatContainer from "@components/tchat/ChatContainer";

interface SidebarProps {
  setCurrentContent: (content: string) => void;
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (message.trim()) {
      console.log("Message envoyé :", message);
      setMessage("");
    }
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>
        <div className={styles.logo}>DeepAtlas</div>
        <button className={styles.chatButton}>
          <Icon name="plusBubble" size={20} className={styles.chatIcon} />
          New chat
        </button>
      </div>

      <div className={styles.contentWrapper}>
        <ChatContainer />
      </div>
    </div>
  );
};

export default Sidebar;
