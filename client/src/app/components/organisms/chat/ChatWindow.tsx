
import { MessageItem } from "../../molecules/messaging/MessageItem";
import { MessageInput } from "../../molecules/messaging/MessageInput";

interface ChatWindowProps {
    messages: { message: string; isOwn: boolean; username?: string }[];
    onSend: (msg: string) => void;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({ messages, onSend }) => {
    return (
        <div className="min-h-screen bg-bg text-white font-roboto flex flex-col items-center justify-end p-4">
            <div className="w-full max-w-2xl flex flex-col gap-1 flex-1 overflow-y-auto px-2">
                {messages.map((msg, index) => (
                    <MessageItem
                        key={index}
                        message={msg.message}
                        isOwn={msg.isOwn}
                        username={msg.username}
                    />
                ))}
            </div>
        <MessageInput onSend={onSend} />
        </div>
    );
};
