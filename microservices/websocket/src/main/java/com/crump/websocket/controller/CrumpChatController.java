package com.crump.websocket.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

import com.crump.websocket.dto.ChatInput;

@Controller
public class CrumpChatController {

    @MessageMapping("sendMessage")
    @SendTo("mainChat")
    public String sendMessage(ChatInput input) {
        return HtmlUtils.htmlEscape(input.user() + ": " + input.message());
    }
}
