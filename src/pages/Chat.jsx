import { Mic, Send, Bot, User } from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

const initialMessages = [
    {
        id: 1,
        sender: 'bot',
        text: "Hello! I am your A-ID, a first-aid assistant powered by Gemini. How can I help you today? \n\nPlease remember, I am an AI and not a substitute for professional medical advice. In case of a serious emergency, please contact your local emergency services immediately."
    }
];

const BotMessage = ({ text }) => (
    <div className="flex items-end justify-start gap-3 animate-fade-in">
        <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white flex-shrink-0">
            <Bot size={20} />
        </div>
        <div className="max-w-[80%] bg-sky-100 p-3 rounded-t-xl rounded-br-xl shadow-sm">
            <p className="text-sm text-slate-800 whitespace-pre-wrap">{text}</p>
        </div>
    </div>
);

const UserMessage = ({ text }) => (
    <div className="flex items-end justify-end animate-fade-in">
        <div className="max-w-[80%] bg-rose-100 p-3 rounded-t-xl rounded-bl-xl shadow-sm">
            <p className="text-sm text-slate-800 whitespace-pre-wrap">{text}</p>
        </div>
    </div>
);

const TypingIndicator = () => (
    <div className="flex items-end justify-start gap-3 animate-fade-in">
         <div className="w-8 h-8 rounded-full bg-sky-500 flex items-center justify-center text-white flex-shrink-0">
            <Bot size={20} />
        </div>
        <div className="max-w-[80%] bg-sky-100 p-3 rounded-t-xl rounded-br-xl shadow-sm">
            <div className="flex items-center gap-1">
                <span className="h-2 w-2 bg-sky-400 rounded-full animate-bounce delay-0"></span>
                <span className="h-2 w-2 bg-sky-400 rounded-full animate-bounce delay-150"></span>
                <span className="h-2 w-2 bg-sky-400 rounded-full animate-bounce delay-300"></span>
            </div>
        </div>
    </div>
);


const ChatBox = ({ messages, setMessages, open, setOpen }) => {
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages, isLoading]);


    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    }

    const closeChat = () => {
        setOpen(false);
    }

    const sendMessage = async () => {
        if (inputMessage.trim() === '' || isLoading) return;

        const newUserMessage = { id: messages.length + 1, sender: 'user', text: inputMessage };
        setMessages(prev => [...prev, newUserMessage]);
        setInputMessage("");
        setIsLoading(true);

        const systemPrompt = "You are an expert AI assistant specializing in first aid. Your role is to provide clear, concise, and safe first-aid instructions. Give practical steps, do not be too verbose You must always start your response with a disclaimer: 'Disclaimer: I am an AI assistant and this is not a substitute for professional medical advice. In a life-threatening emergency, please call your local emergency services immediately.' Then, provide the first aid information. Do not answer questions that are not related to first aid, health, or medical emergencies. If asked a non-medical question, politely state that you can only provide first-aid guidance.";
        const userQuery = inputMessage;

        // Gemini API call
        try {
            const apiKey = "AIzaSyAjmVEK0HYspqtPre3rXy3PjcLpG-kKTiw"; // Canvas will provide this
            const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

            const payload = {
                contents: [{ parts: [{ text: userQuery }] }],
                systemInstruction: {
                    parts: [{ text: systemPrompt }]
                },
            };

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`API error: ${response.statusText}`);
            }

            const result = await response.json();
            const botResponse = result.candidates?.[0]?.content?.parts?.[0]?.text;

            if (botResponse) {
                const newBotMessage = { id: messages.length + 2, sender: 'bot', text: botResponse };
                setMessages(prev => [...prev, newBotMessage]);
            } else {
                throw new Error("Received an empty response from the AI.");
            }

        } catch (error) {
            console.error("Failed to fetch from Gemini API:", error);
            const errorMessage = { id: messages.length + 2, sender: 'bot', text: "Sorry, I'm having trouble connecting right now. Please try again later." };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className={`w-full h-full flex flex-col hide-scroll bg-white`}>
            <header className="w-full sticky top-0 z-10">
                <div className="w-full px-4 h-20 mx-auto rounded-b-lg bg-gradient-to-br from-sky-400 to-primary border-b border-slate-200 flex items-center gap-3 shadow-md">
                    <button onClick={closeChat} className="p-2 rounded-full text-white hover:bg-black/10 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <div className="flex flex-col leading-tight">
                        <span className="font-bold text-lg text-white leading-tight">Chat with A-ID</span>
                        <span className="text-xs text-primary">Online</span>
                    </div>
                </div>
            </header>

            {/* Messages Area */}
            <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-24 hide-scroll">
                <div className="text-center text-xs text-slate-400 font-semibold">
                    Today
                </div>

                {messages.map((message) =>
                    message.sender === 'bot' ? (
                        <BotMessage key={message.id} text={message.text} />
                    ) : (
                        <UserMessage key={message.id} text={message.text} />
                    )
                )}
                 {isLoading && <TypingIndicator />}
                <div ref={messagesEndRef}></div> {/* Anchor for scrolling */}
            </main>

            {/* Input Footer */}
            <footer className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 fixed bottom-0 left-0 w-full">
                <div className="flex-1 relative">
                    <input
                        type="text"
                        placeholder="Text a message"
                        value={inputMessage}
                        onChange={handleInputChange}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && inputMessage.trim() !== '') {
                                sendMessage();
                            }
                        }}
                        className="w-full bg-slate-100 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        disabled={isLoading}
                    />
                </div>
                <button className="p-3 rounded-full hover:bg-slate-100 transition-colors" disabled={isLoading}>
                    <Mic size={22} className="text-slate-500" />
                </button>
                <button onClick={sendMessage} className="bg-primary text-white p-3 rounded-full hover:bg-primary transition-colors shadow-md disabled:bg-primary disabled:cursor-not-allowed" disabled={isLoading}>
                    <Send size={20} />
                </button>
            </footer>
        </div>
    );
}

const Chat = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [chatboxOpen, setChatboxOpen] = useState(false);

    return (
        <div className="w-screen h-screen flex flex-col bg-slate-50 font-sans">
            <div className="text-4xl font-bold text-center mt-16 px-4">
                <span className="text-slate-700">Let's </span>
                <span className="text-primary">Chat</span>
            </div>
            <p className="text-center text-slate-500 mt-2">How can we help you today?</p>


            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-10">
                <button onClick={() => { setChatboxOpen(true) }} className="w-full max-w-sm bg-white border-2 border-primary font-bold text-slate-800 px-6 py-4 rounded-xl shadow-lg hover:bg-primary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Chat with <span className="text-primary">A</span><span className="text-sky-500">-ID</span>
                </button>
                <button className="w-full max-w-sm bg-white border-2 border-slate-400 font-bold text-slate-800 px-6 py-4 rounded-xl shadow-lg hover:bg-slate-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    Chat with a <span className="text-slate-600">Qualified First Responder</span>
                </button>
            </div>

            <section className={`absolute top-0 left-0 z-[1000] w-full h-full bg-white transition-transform duration-500 ease-in-out ${!chatboxOpen ? 'translate-x-full' : 'translate-x-0'}`}>
                {chatboxOpen && <ChatBox messages={messages} setMessages={setMessages} open={chatboxOpen} setOpen={setChatboxOpen} />}
            </section>
        </div>
    )
}

export default Chat;
