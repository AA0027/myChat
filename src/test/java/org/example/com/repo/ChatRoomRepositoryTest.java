package org.example.com.repo;

import org.example.com.domain.ChatRoom;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class ChatRoomRepositoryTest {
    @Autowired
    ChatRoomRepository chatRoomRepository;
    @Transactional
    @Test
    public void test(){
        ChatRoom chatRoom1 = chatRoomRepository.save(ChatRoom.createRoom("기술1팀 채팅방"));
        ChatRoom chatRoom2 = chatRoomRepository.save(ChatRoom.createRoom("기술2팀 채팅방"));
        ChatRoom chatRoom3 = chatRoomRepository.save(ChatRoom.createRoom("인사팀 채팅방"));
        ChatRoom chatRoom5 = chatRoomRepository.save(ChatRoom.createRoom("인사과 채팅방"));
        ChatRoom chatRoom4 = chatRoomRepository.save(ChatRoom.createRoom("회계팀 채팅방"));
        System.out.println(chatRoom1);

    }
}