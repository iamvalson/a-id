import { Heart, Search, X } from "lucide-react";
import data from "../data/totorials.json"; // Make sure the path is correct
import { useEffect, useState } from "react";

// --- MODAL COMPONENT ---
// This component will display the detailed tutorial steps in a popup.
const TutorialModal = ({ tutorial, onClose }) => {
    // Prevent clicks inside the modal from closing it
    const handleModalContentClick = (e) => {
        e.stopPropagation();
    };

    return (
        // The semi-transparent background overlay
        <div 
            className="fixed inset-0 bg-lightblue/90 bg-opacity-60 z-50 flex justify-center items-center p-4 hide-scroll"
            onClick={onClose} // Close modal if overlay is clicked
        >
            {/* The modal content itself */}
            <div 
                className="bg-white rounded-lg shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 relative"
                onClick={handleModalContentClick}
            >
                {/* Close Button */}
                <button 
                    onClick={onClose} 
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
                >
                    <X size={24} />
                </button>

                <h2 className="text-3xl font-bold text-secondary mb-6">{tutorial.tutorial_content.headline}</h2>
                
                <div className="space-y-6">
                    {tutorial.tutorial_content.steps.map((step) => (
                        <div key={step.step_number} className="flex flex-col md:flex-row items-start gap-4 border-b pb-4 last:border-b-0">
                            <div 
                                // src={step.image} 
                                // alt={step.title} 
                                className="bg-[url(./src/assets/chatbg.png)] bg-center bg-cover w-full md:w-48 h-32 object-cover rounded-md shadow-sm shrink-0" 
                            />
                            <div>
                                <h4 className="text-lg font-bold text-primary mb-1">
                                    Step {step.step_number}: {step.title}
                                </h4>
                                <p className="text-slate-700">{step.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


// --- LEARNING CARD COMPONENT ---
// I've added the `onCardClick` prop and updated the image source.
const LearningCard = ({ tutorial, onCardClick }) => {
    const converProgress = (progress) => {
        if (progress === 0) return "Begin!";
        if (progress > 0 && progress < 100) return progress + "%";
        if (progress === 100) return "Completed";
        return "Unknown";
    }
    return (
        <div 
            className="w-full max-w-lg bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
            onClick={() => onCardClick(tutorial)} // This makes the card clickable
        >
            {/* Using cardImage from your JSON data now */}
            <img src={tutorial.cardImage} alt={tutorial.title} className="w-full h-32 object-cover" />
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xs font-semibold bg-primary/10 text-primary leading-tight py-1 px-2 rounded-md">{converProgress(tutorial.progress)}</h3>
                    <div className="flex items-center justify-center bg-secondary/20 rounded-full size-7 shrink-0">
                        <Heart className="size-5 text-secondary" />
                    </div>
                </div>
                <h3 className="leading-tight text-lg font-bold text-secondary mb-2">{tutorial.title}</h3>
                <p className="leading-tight text-sm text-slate-600">{tutorial.description}</p>
            </div>
        </div>
    )
}


// --- MAIN LEARN PAGE COMPONENT ---
// This is your main component, now with state and handlers for the modal.
const Learn = () => {
    const tips = [
        "First Aid Learning Hub",
        "Learn life-saving skills!",
        "Stay prepared for emergencies.",
        "Knowledge is your best tool.",
        "Quick tips for every situation.",
    ];
    const [currentTipIdx, setCurrentTipIdx] = useState(0);
    const [selectedTutorial, setSelectedTutorial] = useState(null); // State to track the selected card

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTipIdx((prev) => (prev + 1) % tips.length);
        }, 120000); // 2 minutes
        return () => clearInterval(interval);
    }, []);

    // Function to open the modal
    const handleCardClick = (tutorial) => {
        setSelectedTutorial(tutorial);
    };

    // Function to close the modal
    const handleCloseModal = () => {
        setSelectedTutorial(null);
    };

    return (
        <>
            <div className="w-screen min-h-screen flex flex-col items-center px-4 hide-scroll ">
                <div className="mt-10 flex">
                    <span className="text-2xl font-bold text-secondary text-center">
                        {tips[currentTipIdx].split(' ').map((word, i) =>
                            word.toLowerCase() === 'aid' ? <span key={i} className="text-primary">{word} </span> : word + ' '
                        )}
                    </span>
                </div>

                <div className="flex relative w-full flex-col items-center">
                    <Search className="absolute left-0 top-1/2 -translate-y-1/2 size-4 ml-3 mt-4 text-darkblue" />
                    <input type="text" placeholder="Search for a topic" className="w-full max-w-lg pl-10 bg-slate-100 rounded-full py-3 px-5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mt-6" />
                </div>

                {/* Hazard Cards */}
                <section className="w-full max-w-lg mt-10 grid grid-cols-2 gap-4 mb-20">
                    {data.map((item, index) => (
                        <LearningCard
                            key={index}
                            tutorial={item}
                            onCardClick={handleCardClick} // Pass the click handler to each card
                        />
                    ))}
                </section>
            </div>

            {/* Conditionally render the modal */}
            {selectedTutorial && (
                <TutorialModal 
                    tutorial={selectedTutorial} 
                    onClose={handleCloseModal} 
                />
            )}
        </>
    )
}

export default Learn;