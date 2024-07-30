package org.example.com.controller;

import org.example.com.domain.ChatRoom;
import org.example.com.dto.Channel;
import org.example.com.service.ChatRoomService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ChatRoomController {

    private final ChatRoomService chatRoomService;


    public ChatRoomController(ChatRoomService chatRoomService) {
        this.chatRoomService = chatRoomService;
    }

    // 채팅방 생성후 ID 반환
    @CrossOrigin
    @PostMapping("/chat-room")
    public ResponseEntity<ChatRoom> creatChatRoom() {
        ChatRoom chatRoom = chatRoomService.createChatRoom("test");
        return ResponseEntity.ok().body(chatRoom);
    }
    @CrossOrigin
    @GetMapping("/chating-room/list")
    public ResponseEntity<List<Channel>> getChatRoomList() {
        List<ChatRoom> list = chatRoomService.getAllChatRoom();

        List<Channel> channelList = new ArrayList<>();
        list.forEach(e -> channelList.add(Channel.createChannel(e)));
        return ResponseEntity.ok().body(channelList);
    }

}

