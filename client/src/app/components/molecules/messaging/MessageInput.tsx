"use client";

import React, { useState } from "react";

interface MessageInputProps {
    onSend: (message: string) => void;
}

export const MessageInput: React.FC<MessageInputProps> = ({ onSend }) => {
    const [message, setMessage] = useState("");

    const handleKeyPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && message.trim()) {
            onSend(message);
            setMessage("");
        }
    }
    
    return (
        <div className="flex items-center gap-2 text-green-500 px-4 py-3 border-t border-gray-700">
            <span className="text-xl">{">"}</span>
            <input
                type="text"
                className="bg-transparent border-none outline-none text-white flex-1 text-lg placeholder-gray-400"
                placeholder="type..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPressed}
            />
        </div>    
    );
}