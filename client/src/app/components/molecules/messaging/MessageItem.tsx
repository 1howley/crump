import { Arrow } from "../../atoms/Arrow";
import { BubbleMessage } from "../../atoms/messaging/BubbleMessage";

interface MessageItemProps {
    message: string;
    isOwn: boolean;
    username?: string;
}

export const MessageItem: React.FC<MessageItemProps> = ({ message, isOwn, username }) => {
    return (
        <div className={"flex items-end gap-2 mb-3 w-full " + isOwn ? "justify-end" : "justify-start"}>
            {!isOwn && <Arrow direction="right" />}
            <BubbleMessage message={message} isOwn={isOwn} username={username} />
            {isOwn && <Arrow direction="left" />}
        </div>
    );
}