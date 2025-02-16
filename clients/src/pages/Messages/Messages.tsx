import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Avatar,
  Typography,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Header from "../../components/layouts/Header/Header";
import Footer from "../../components/layouts/Footer/Footer";

import "./Messages.css";

// Define the type for a message
interface Message {
  text: string;
  sender: string;
  timestamp: Date;
}

const Messages = () => {
  const [messages, setMessages] = useState<Message[]>([]); // Use the Message type
  const [currentMessage, setCurrentMessage] = useState("");

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([
        ...messages,
        { text: currentMessage, sender: "You", timestamp: new Date() },
      ]);
      setCurrentMessage("");
    }
  };

  return (
    <div className="main-container">
      {/* Header Component */}
      <Header />
      <Box className="messages-container">
        <h2 className="page-title">Messages</h2>

        {/* Empty State */}
        {messages.length === 0 ? (
          <Box className="empty-messages">
            <ChatBubbleOutlineIcon className="empty-icon" />
            <Typography variant="h6" className="empty-text">
              You haven't got any messages yet - assign a task or get a task.
            </Typography>
          </Box>
        ) : (
          /* Chat Section */
          <Box className="chat-section">
            <List className="chat-list">
              {messages.map((msg, index) => (
                <ListItem
                  key={index}
                  className={`chat-item ${
                    msg.sender === "You" ? "chat-sent" : "chat-received"
                  }`}
                >
                  <Avatar className="chat-avatar">
                    {msg.sender === "You" ? "Y" : "T"}
                  </Avatar>
                  <ListItemText
                    primary={msg.text}
                    secondary={msg.timestamp.toLocaleTimeString()}
                    className="chat-text"
                  />
                </ListItem>
              ))}
            </List>

            {/* Message Input */}
            <Box className="message-input">
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Type your message..."
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                className="message-textfield"
              />
              <Button
                variant="contained"
                color="primary"
                onClick={handleSendMessage}
                className="send-button"
                endIcon={<SendIcon />}
              >
                Send
              </Button>
            </Box>
          </Box>
        )}
      </Box>
      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default Messages;
