import { useState } from "react"
import Navbar from "../components/Navbar"
import Home from './Home.jsx';     // Import your page components
import Learn from './Learn.jsx';
import Profile from './Profile.jsx';
import Chat from './Chat.jsx';
import Emergency from "./Emergency.jsx";

const Main = () => {
    // 1. Correctly destructure the state from `useState`
    const [currentPage, setCurrentPage] = useState("Home");

    // 2. Define a function to handle page changes
    const handlePageChange = (pageName) => {
        
        setCurrentPage(pageName);
        console.log("Current Page:", pageName);
    };

    // 3. A function to render the correct page component based on the state
    const renderPage = () => {
        switch (currentPage) {
            case 'Home':
                return <Home />;
            case 'Learn':
                return <Learn />;
            case 'Profile':
                return <Profile />;
            case 'Chat':
                return <Chat />;
            case 'SOS':
                return <Emergency />;
            default:
                return <Home />;
        }
    };
    
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center hide-scroll">
            {/* The rendered page will appear here */}
            <div className="flex-1 w-full overflow-auto">
                {renderPage()}
            </div>
            
            {/* 4. Pass the state and the handler down to the Navbar */}
            <Navbar currentPage={currentPage} onPageChange={handlePageChange} />
        </div>
    );
};

export default Main;