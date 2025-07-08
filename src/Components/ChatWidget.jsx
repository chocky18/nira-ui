import React from "react";
import "./ChatWidget.css";
import { FaBoxOpen, FaPaperPlane } from "react-icons/fa";

const ChatWidget = () => {
  return (
    <div className="chat-widget">
      <h2>Minimalist</h2>
      <p className="status-text">We will be back soon</p>

      <div className="chat-option">
        <div className="icon-box">
          <FaBoxOpen />
        </div>
        <div className="chat-text">
          <strong>Track and manage my orders</strong>
        </div>
        <div className="arrow">›</div>
      </div>

      <div className="chat-option">
        <div className="support-avatars">
          <div className="avatar">S</div>
          <div className="avatar">S</div>
          <div className="avatar">S</div>
        </div>
        <div className="chat-text">
          <strong>Support</strong>
          <div className="subtext">Leave a message</div>
        </div>
        <div className="arrow">
          <FaPaperPlane />
        </div>
      </div>

      <div className="chat-footer">
        <p>
          By using this chat, you consent to our{" "}
          <a href="/">Privacy Policy</a>.
        </p>
        <button className="close-btn">✕</button>
      </div>
    </div>
  );
};

export default ChatWidget;
