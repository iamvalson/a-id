import { ArrowRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// --- Mock Components/Data (Assuming these files exist elsewhere) ---
// In a real app, you would import these. For this single-file example,
// we'll create simple placeholders.
const SettingsMenuButton = () => <div>⚙️</div>; // Placeholder
const safetyTipsData = { // Placeholder
    "safetyTips": [
        "Always wear a helmet when riding a bike or scooter.",
        "Look both ways before crossing the street.",
        "Keep electrical appliances away from water.",
        "Don't share personal information with strangers online."
    ]
};
// -------------------------------------------------------------------


// --- Data Source (Previously `src/data/quickAidData.js`) ---
// We define the data directly in this file.
// Make sure your image paths correspond to the actual files in your assets folder.
const quickAidData = [
    {
        id: 1,
        title: "Burns",
        imageSrc: "./src/assets/tut/burns.jpg",
        link: "/aid/burns"
    },
    {
        id: 2,
        title: "Cuts & Scrapes",
        imageSrc: "./src/assets/tut/cut.jpg",
        link: "/aid/cuts"
    },
    {
        id: 3,
        title: "Choking",
        imageSrc: "./src/assets/tut/choking.jpg",
        link: "/aid/choking"
    },
    {
        id: 4,
        title: "Sprains",
        imageSrc: "./src/assets/tut/sprain.jpg",
        link: "/aid/sprains"
    },
    {
        id: 5,
        title: "Nosebleed",
        imageSrc: "./src/assets/tut/nosebleed.jpg",
        link: "/aid/nosebleed"
    }
];


// --- Reusable Card Component (Previously `src/components/QuickAidCard.jsx`) ---
// This component is defined in the same file, so no import is needed.
const QuickAidCard = ({ title, imageSrc, link }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        if (link) {
            navigate(link);
        }
    };

    return (
        <div
            onClick={handleCardClick}
            className="group relative flex-shrink-0 w-32 h-44 rounded-xl overflow-hidden shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl"
        >
            {/* Background Image */}
            <img 
                src={imageSrc} 
                alt={title} 
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Gradient Overlay for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
            {/* Title Text */}
            <h3 className="absolute bottom-3 left-3 text-white font-bold poppins text-base drop-shadow-md">
                {title}
            </h3>
        </div>
    );
};


// --- Main Home Component ---
const Home = () => {
    const [user, setUser] = useState({}); // Correct usage
    const navigate = useNavigate();
    const [tipOfTheDay, setTipOfTheDay] = useState("");

    useEffect(() => {
        const tips = safetyTipsData.safetyTips;
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        setTipOfTheDay(randomTip);
    }, []);

    return (
        <div className="w-screen min-h-screen bg-white flex flex-col pt-4 px-2">
            <section className="flex flex-col gap-4">
                {/* User profile and settings section */}
                <div className="flex gap-2 items-center">
                    <div className="size-16 rounded-full overflow-hidden border-2 border-lightblue shadow-md">
                        <img src="./src/assets/pfp.png" className="size-16 aspect-square" alt="Profile"/>
                    </div>
                    <div className="flex justify-between items-center h-full grow">
                        <div className="flex flex-col leading-tight">
                            <span className="title font-bold">
                                Hi Jewel Abimbola 👋
                            </span>
                            <span className="text-xs">
                                Stay safe today!
                            </span>
                        </div>
                        <button className="size-9">
                           <SettingsMenuButton />
                        </button>
                    </div>
                </div>

                {/* Safety tips */}
                <div className="bg-lightblue flex flex-col py-3 px-5 rounded-md text-xs poppins shadow-md">
                    <span className="text-primary">
                        Safety tip of the day:
                    </span>
                    <span>
                        {tipOfTheDay}
                    </span>
                </div>
            </section>

            <section className="mt-7 flex flex-col gap-8">
                {/* Complete your profile */}
                <div className="flex flex-col gap-3 bg-[url('./src/assets/bearts.jpg')] bg-center bg-cover py-4 px-3 shadow-md rounded-lg">
                    <span className="font-outfit flex gap-2 font-bold items-center text-[1.1rem] leading-tight justify-between">
                        🔔 Complete your Safety Profile <ArrowRight className="size-5" />
                    </span>
                    <span className="font-poppins text-md leading-tight">
                        This helps us personalize first aid tips and keep you safer.
                    </span>
                    <div className="w-full h-2 rounded-full bg-primary/20">
                        <div className="w-[60%] h-full rounded-full bg-primary"></div>
                    </div>
                </div>

                {/* IMPROVED QUICK TIPS SECTION */}
                <section id="aid-tips">
                    <div className="pl-2 flex gap-2 py-4">
                        <span className="text-md font-bold text-secondary">Quick First</span>
                        <span className="text-md font-bold text-primary">Aid</span>
                    </div>

                    {/* We now map over our data to dynamically render the cards */}
                    <div className="flex gap-4 overflow-x-scroll h-auto hide-scroll pb-4 pl-2">
                        {quickAidData.map((aid) => (
                            <QuickAidCard
                                key={aid.id}
                                title={aid.title}
                                imageSrc={aid.imageSrc}
                                link={aid.link}
                            />
                        ))}
                    </div>
                </section>
            </section>
        </div>
    );
};

export default Home;