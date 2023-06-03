import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import React from "react";
const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [products, setProducts] = useState([]);
  const history = useHistory();
  useEffect(() => {
    const userdetail = JSON.parse(localStorage.getItem("userdetail"));
    setUser(userdetail);
    if (!userdetail) {
      history.push("/auth");
    }
  }, [history]);

  return (
    <ChatContext.Provider value={{ user, products }}>
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
