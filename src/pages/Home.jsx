import { ArrowRight, Heart, LucideColumnsSettings, Settings } from "lucide-react";
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import QuickAidCards1 from "../components/QuickAidCards1";
import Navbar from "../components/Navbar";

const Home = () => {
    const user = useState({})
    const navigate = useNavigate();
    useEffect(() => {
        // navigate("/auth")
    }, [])
    return (
        <div className="w-screen min-h-screen bg-white flex flex-col pt-4 px-2">
            <Navbar />
            <section className="flex flex-col gap-4">
                <div className="flex gap-2 items-center">
                    <divs className="size-16 rounded-full overflow-hidden border-2 border-lightblue">
                        <img src="./src/assets/pfp.png" className="size-16 aspect-square" />
                    </divs>
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
                            <Settings className="size-full" />
                        </button>
                    </div>
                </div>

                {/* Saftey tips */}
                <div className="bg-lightblue flex flex-col py-3 px-5 rounded-md text-xs poppins shadow-md">
                    <span className="text-primary">
                        Safety tip of the day:
                    </span>
                    <span>
                        💧 Drink water often - Dehydration can cause dizziness
                    </span>
                </div>

            </section>

            <section className="mt-7 flex flex-col gap-8">
                {/* Complete your profile */}
                <div className="flex flex-col gap-3 bg-[url('./src/assets/bearts.jpg')] bg-center bg-cover py-4 px-3 shadow-md">
                    <span className="font-outfit flex gap-2 font-bold items-center text-[1.1rem] leading-tight justify-between">
                      🔔 Complete yuor Safety Profile <ArrowRight className="size-5" />
                    </span>
                    <span className="font-poppins text-md leading-tight">
                        This helps us personalize first aid tips and keep you safer.
                    </span>
                    <div className="w-full h-2 rounded-full bg-primary/20">
                        <div className="w-[60%] h-full rounded-full bg-primary"></div>
                    </div>
                </div>

                {/* Quick tips */}
                <section id="aid-tips">
                    <div className="pl-2 flex gap-2 py-4">
                        <span className="text-md font-semibold text-secondary">Quick First</span>
                        <span className="text-md font-semibold text-primary">Aid</span>
                    </div>

                    <div className="flex gap-4 overflow-x-scroll h-auto hide-scroll pb-2">
                       <QuickAidCards1 />
                       <QuickAidCards1 />
                       <QuickAidCards1 />
                       <QuickAidCards1 />
                    </div>
                </section>
            </section>

        </div>
    )
}

export default Home;