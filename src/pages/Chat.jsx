import { Mic, Send } from "lucide-react";
import { useState } from "react";

const initialMessages = [
    {
        id: 1,
        sender: 'bot',
        text: 'Hello! A-ID bot here. What emergency help do you need?',
    },
    {
        id: 2,
        sender: 'user',
        text: 'I\'m having some chest pain and I feel dizzy.',
    },
    {
        id: 3,
        sender: 'user',
        text: 'I think it might be serious.',
    },
    {
        id: 4,
        sender: 'bot',
        text: 'I understand. Please stay calm. I\'m alerting emergency services to your location now. Can you tell me if you have any known heart conditions?',
    },
    {
        id: 5,
        sender: 'user',
        text: 'No, I don\'t think so.',
    },
    {
        id: 6,
        sender: 'bot',
        text: 'Okay. Help is on the way. Try to sit down in a comfortable position and take slow, deep breaths. Keep this chat open.',
    },
];



const BotMessage = ({ text }) => (
    <div className="flex items-end justify-start gap-2 animate-fade-in">
        <img
            // src="https://placehold.co/32x32/7dd3fc/1e3a8a?text=B"
            alt="Bot Avatar"
            className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
        />
        <div className="max-w-[80%] bg-white p-3 rounded-t-xl rounded-br-xl shadow-sm">
            <p className="text-sm text-slate-700">{text}</p>
        </div>
    </div>
);

const UserMessage = ({ text }) => (
    <div className="flex items-end justify-end animate-fade-in">
        <div className="max-w-[80%] bg-lightblue p-3 rounded-t-xl rounded-bl-xl shadow-sm">
            <p className="text-sm text-slate-700">{text}</p>
        </div>
    </div>
);

const ChatBox = ({ messages }) => {
    const [inputMessage, setInputMessage] = useState("");
    const handleInputChange = (e) => {
        setInputMessage(e.target.value);
    }
    const voiceInput = () => {
        // will implement soon
    }

    const sendMessage = () => {
        messages.push({ id: messages.length + 1, sender: 'user', text: inputMessage });
        setInputMessage("");
    }

    const scrollToBottom = () => {
        const endOfMessages = document.getElementById("end-of-messages");
    }

    return <>
        <top className="w-full p-4 bg-white border-b border-slate-200 flex items-center gap-3 fixed top-0 left-0">
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-6 text-darkblue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>

                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg text-secondary leading-tight">AI-D Bot</span>
                <span className="text-xs text-slate-400">Online</span>
            </div>
        </top>

        {/* Messages Area */}
        <main className="flex-1 overflow-y-auto p-4 space-y-4 pb-16">
            <div className="text-center text-xs text-slate-400 font-semibold">
                Friday 12:58 PM
            </div>

            {messages.map((message) =>
                message.sender === 'bot' ? (
                    <BotMessage key={message.id} text={message.text} />
                ) : (
                    <UserMessage key={message.id} text={message.text} />
                )
            )}
            <div id="end-of-messages"></div> {/* Anchor for scrolling */}
        </main>

        {/* Input Footer */}
        <footer className="p-3 bg-white border-t border-slate-200 flex items-center gap-2 fixed bottom-0 left-0 w-full">
            <div className="flex-1 relative">
                <input
                    type="text"
                    placeholder="Text a message"
                    value={inputMessage}
                    onChange={handleInputChange}
                    className="w-full bg-slate-100 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <button className="p-3 rounded-full hover:bg-slate-100 transition-colors">
                <Mic size={22} className="text-red-500" />
            </button>
            <button onClick={sendMessage} className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors shadow-md">
                <Send size={20} />
            </button>
        </footer>
    </>
}

const Chat = () => {
    const [messages, setMessages] = useState(initialMessages);
    const [chatboxOpen, setChatboxOpen] = useState(false);

    return (
        <div className="w-screen h-full flex flex-col pt-10">

            <div className="text-3xl font-ouflit text-center">
                <span className="text-secondary font-bold">Let's </span>
                <span className="text-primary font-bold">Chat</span>
            </div>

            <div className="flex-1 flex flex-col gap-6 mt-20 px-10">
                <button className="bg-lightblue border-2 border-secondary font-bold px-6 py-2 rounded-md shadow-md hover:bg-primary/20 transition-colors">
                    Chat with <span className="text-secondary">Ai</span><span className="text-primary">-d</span>
                </button>
                <button className="bg-lightblue border-2 border-secondary font-bold px-6 py-2 rounded-md shadow-md hover:bg-primary/20 transition-colors">
                    Chat with a <span className="text-secondary">Qualified </span><span className="text-primary"> First Responder</span>
                </button>
            </div>

            {/* {chatboxOpen && <ChatBox />} */}
            <section className="absolute z-[100000] w-screen h-screen bg-gradient-to-b from-white to-lightblue">
                <ChatBox messages={messages} open={chatboxOpen}/>
            </section>


        </div>
    )
}

export default Chat;