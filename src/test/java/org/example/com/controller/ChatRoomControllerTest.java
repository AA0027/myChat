package org.example.com.controller;

import org.example.com.domain.ChatRoom;
import org.example.com.service.ChatRoomService;
import org.example.com.type.Dept;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ChatRoomControllerTest {
    @Autowired
    ChatRoomService chatRoomService;

    @Test
    @Transactional
    public void test(){

        chatRoomService.createChatRoom("기술1팀 채팅방");
        chatRoomService.createChatRoom("기술2팀 채팅방");
        chatRoomService.createChatRoom("인사팀 채팅방");
        chatRoomService.createChatRoom("인사과 채팅방");
        chatRoomService.createChatRoom("경리부 채팅방");
        List<ChatRoom> rooms = chatRoomService.getAllChatRoom();
        System.out.println(rooms);

    }
}