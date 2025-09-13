import { Settings } from "lucide-react";
import { useState } from "react";

const SettingsMenuButton = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative size-full">
            <Settings className="size-full" />
            <div className={`flex flex-col z-[9999999] a top-full right-6 w-auto h-auto bg-lightblue ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="flex p-4 text-black">
                    Settings Menu
                </div>
            </div>
        </div>
    );
};

export default SettingsMenuButton;