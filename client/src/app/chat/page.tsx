"use client";

import { ChatWindow } from "../../components/organisms/chat/ChatWindow";
import { useEffect, useRef } from "react";

import { RxStomp } from "@stomp/rx-stomp";
import type { RxStompConfig } from "@stomp/rx-stomp";
import SockJS from "sockjs-client";

const rxStompConfig: RxStompConfig = {
    brokerURL: "http://localhost:8080/crump-websocket",
    webSocketFactory: () => new SockJS("http://localhost:8080/crump-websocket"),
    connectHeaders: { 
        login: "guest",
        passcode: "guest"
    },
    debug: (msg) => {
        console.log(new Date(), msg);
    },
    heartbeatIncoming: 0,
    heartbeatOutgoing: 20000,
    reconnectDelay: 200,
}

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

    const rxStomRef = useRef(new RxStomp());
    const rxStomp = rxStomRef.current;

    useEffect(() => {
        rxStomp.configure(rxStompConfig);
        rxStomp.activate();

        return () => {
            rxStomp.deactivate();
        }
    })

    return (
        <ChatWindow messages={messages} onSend={(e) => console.log(e)}/>
    );
}