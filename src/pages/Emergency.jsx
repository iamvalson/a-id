import { MapPin, Mic, PhoneCall } from "lucide-react";



const Emergency = () => {
    return (
      <div className="w-screen min-h-screen flex flex-col items-center px-4 hide-scroll ">

            <div className="mt-10 flex">
                <span className="text-2xl font-bold text-secondary">
                    Having an
                    <span className="text-primary"> emergency? </span>
                </span>
            </div>


            <div className="mt-14 font-poppins text-center flex flex-col items-center">
                <p className="text-md leading-tight px-2">
                    Don't worry, help is on the way! Tap the panic button to call for help   
                </p>

                <div className="flex flex-center aspect-square bg-red-100 text-red-500 rounded-full p-6 mt-10 ">
                    <img src="./src/assets/phone.svg" alt="Emergency" className="size-18 mx-auto my-6 shrink-0" />
                </div>

                <div className="mt-6">
                    <p className="font-bold font-outfit">Other ways to get help!</p>

                    <button className="mt-4 flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow w-full justify-between">
                        <span className="font-semibold">
                            Find Nearest Hospital
                        </span>
                        <MapPin className="size-5" />
                    </button>
                    <button className="mt-4 flex items-center gap-2 bg-primary/10 text-primary px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-shadow w-full justify-between">
                        <span className="font-semibold">
                            Speak to Ai-d
                        </span>
                        <Mic className="size-5" />
                    </button>
                </div>


                
                {/* <span className="text-lg font-semibold">
                    Don't worry, help is on the way!
                </span>
                <p className="mt-4">
                    We've alerted emergency services and your trusted contacts.
                </p>
                <p className="mt-2">
                    Stay calm and follow any instructions they provide.
                </p> */}
            </div>




        </div>
    )
}

export default Emergency;