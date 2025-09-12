import { AlertTriangle, Book, Contact2, GraduationCap, Home, MessageCircleMore } from "lucide-react"


const navlinks = [
    {
        name: "Home",
        logo: <Home />
    },
    {
        name: "Learn",
        logo: <GraduationCap />,
    },
    {
        name: "Profile",
        logo: <Contact2 />
    },
    {
        name: "Chat",
        logo: <MessageCircleMore />
    }
]


// 1. Accept currentPage and onPageChange as props
const Navbar = ({ currentPage, onPageChange }) => {
    
    // This function can now be removed, we'll put the logic directly in the return
    // const navIcon = () => { ... }

    return (
        <div className="absolute flex items-center z-100 bottom-0 left-0 w-screen h-16 hide-scroll">
            <div className="w-[75%] h-full max-w-lg bg-lightblue px-4 rounded-tr-md">
                <div className="w-full h-full max-w-lg mx-auto flex justify-between items-center text-secondary">
                    {navlinks.map((link, index) => (
                        // 2. Add an onClick handler to call the onPageChange prop
                        <button 
                            key={index} 
                            onClick={() => onPageChange(link.name)}
                            className={`flex flex-col items-center gap-1 transition-all duration-300
                                // 3. Use currentPage prop to conditionally apply a class
                                ${currentPage === link.name ? 'scale-110' : ''}
                            `}
                        >
                            {/* 4. Use conditional styling for the icon and text */}
                            <div className={`size-6 transition-colors duration-300
                                ${currentPage === link.name ? 'text-primary' : 'text-darkblue'}
                            `}>
                                {link.logo}
                            </div>
                            <span className={`text-[0.6rem] transition-colors duration-300 font-bold
                                ${currentPage === link.name ? 'text-primary' : 'text-secondary'}
                            `}>
                                {link.name}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
            {/* The SOS button remains unchanged as it doesn't navigate to a page */}
            <button className="mx-auto flex flex-col flex-center size-14 items-center text-primary bg-primary/50 p-2 rounded-full">
                <div className="size-6 text-darkblue">
                    <AlertTriangle className="size-full " />
                </div>
                <span className="text-[0.6rem] text-primary font-bold">
                    SOS
                </span>
            </button>
        </div>
    );
};

export default Navbar;