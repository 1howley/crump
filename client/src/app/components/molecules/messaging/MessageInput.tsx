"use client";

import React, { useState } from "react";
import { Arrow } from "../../atoms/Arrow";

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
        <div className="flex items-center gap-2 px-4 py-1.5 border-t border-[#343D3B] bg-[#222E2B] rounded-xs">
            <Arrow direction="right"/>
            <input
                type="text"
                className="bg-transparent border-none outline-none text-[var(--color-fg)] flex-1 text-lg placeholder-[#6B7280]"
                placeholder="type..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyPressed}
            />
        </div>    
    );
}