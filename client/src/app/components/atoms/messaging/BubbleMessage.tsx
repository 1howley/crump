import clsx from "clsx";

interface BubbleMessageProps {
    message: string;
    isOwn: boolean;
    username?: string;
}

export const BubbleMessage: React.FC<BubbleMessageProps> = ({ message, isOwn = false, username }) => {
    return(
        <div className={clsx(
            "max-w-full sm:max-w-md px-4 py-3 rounded-xl text-base text-white break-words",
            isOwn ? "bg-gray-700 ml-auto" : "bg-gray-800 mr-auto"
        )}>
            <p>{message}</p>
            <span className="text-[10px] text-gray-400 block mt-1">{username}</span>
        </div>
    );
}