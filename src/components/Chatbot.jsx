import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";
import contactConfig from "../constants/contactConfig";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: `Hi! I'm Jayanth's AI assistant. How can I help you today?`,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const responses = [
        "That's interesting! Let me connect you with Jayanth. You can also reach out via email at " + contactConfig.YOUR_EMAIL,
        "Thanks for your interest! For more details, please contact Jayanth directly.",
        "I'd be happy to help! You can reach Jayanth at " + contactConfig.YOUR_FONE + " or email " + contactConfig.YOUR_EMAIL,
        "Great question! For professional inquiries, please contact Jayanth through the contact form or email.",
      ];
      const botMessage = {
        text: responses[Math.floor(Math.random() * responses.length)],
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="fixed bottom-24 right-4 sm:right-6 md:right-8 w-[90vw] sm:w-96 h-[500px] bg-black-200 rounded-2xl shadow-2xl z-[9998] flex flex-col border border-[#915EFF]/30"
          >
            <div className="bg-tertiary p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#915EFF] flex items-center justify-center">
                  <FaRobot className="text-white" size={18} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">Jayanth's Assistant</h3>
                  <p className="text-secondary text-xs">Online</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-secondary hover:text-white transition-colors"
              >
                <FaTimes size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-2xl ${
                      msg.sender === "user"
                        ? "bg-[#915EFF] text-white"
                        : "bg-tertiary text-white"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="p-4 border-t border-tertiary">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Type your message..."
                  className="flex-1 bg-tertiary text-white px-4 py-2 rounded-lg outline-none border-none text-sm"
                />
                <button
                  onClick={handleSend}
                  className="bg-[#915EFF] text-white p-2 rounded-lg hover:bg-[#7a4dd4] transition-colors"
                >
                  <FaPaperPlane size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 md:right-8 w-14 h-14 bg-[#915EFF] rounded-full shadow-lg flex items-center justify-center z-[9997] hover:bg-[#7a4dd4] transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? (
          <FaTimes className="text-white" size={20} />
        ) : (
          <FaRobot className="text-white" size={20} />
        )}
      </motion.button>
    </>
  );
};

export default Chatbot;

