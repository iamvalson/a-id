import { ArrowRight, Heart, LucideColumnsSettings, Settings } from "lucide-react";


const QuickAidCards1 = (
    props = {
        name: "burns",
    }
) => {

    return (
        <div className="relative w-36 shrink-0 h-40 rounded-md bg-gradient-to-b from-primary/40 to-white shadow-md">
            <button className="absolute right-2 top-2 size-6 flex flex-center rounded-full bg-primary/50">
                <Heart className="size-4 text-secondary" />
            </button>
            <span className="font-semibold absolute bottom-2 left-1/2 -translate-x-1/2">
                Burns
            </span>
        </div>
    )

}

export default QuickAidCards1