"use client";

import { ChatWindow } from "../components/organisms/chat/ChatWindow";

export default function ChatPage() {

    const messages = [
        {
            message: "Qualé hahah! hoje sepa nao vou conseguir",
            isOwn: false,
            username: "howley"
        }, 
        {
            message: "loremI dahjfhdjas flçsaeope sfjkasof jas opfaopfs fspeqp edjoqwe opqwdlpas jkaslpfsakfjasopujdqow jdqwopdjqwpjos",
            isOwn: false,
            username: "howley"
        },
        {
            message: "pdc hopje se pa vai da",
            isOwn: true,
        }
    ]

    return (
        <ChatWindow messages={messages} onSend={(e) => console.log(e)}/>
    );
}