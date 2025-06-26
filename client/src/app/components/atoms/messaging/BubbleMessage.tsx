import clsx from "clsx";

interface BubbleMessageProps {
    message: string;
    isOwn: boolean;
    username?: string;
}

export const BubbleMessage: React.FC<BubbleMessageProps> = ({ message, isOwn = false, username }) => {
    return(
        <div className={clsx(
            "max-w-full sm:max-w-md px-4 py-1.5 rounded-xs text-base text-[var(--color-fg)] break-words",
            isOwn ? "bg-[#333E3B] ml-auto" : "bg-[#202C29] mr-auto"
        )}> 
            <p>{message}</p>
            <span className="text-[15px] text-gray-400 mt-1 flex justify-end">{username}</span>
        </div>
    );
}