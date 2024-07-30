package org.example.com.service;

import org.example.com.domain.ChatRoom;
import org.example.com.repo.ChatRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ChatRoomService {

    private final ChatRoomRepository chatRoomRepository;

    public ChatRoomService(ChatRoomRepository chatRoomRepository) {
        this.chatRoomRepository = chatRoomRepository;
    }


    // 채팅방 생성
    public ChatRoom createChatRoom(String name){
        ChatRoom room = ChatRoom.createRoom(name);
        chatRoomRepository.save(room);
        return room;
    }
    // 이름으로 채팅방 조회
    public ChatRoom fincChatRoom(String name){
        return chatRoomRepository.findChatRoomByName(name);
    }

    // 전체 채팅방 조회
    public List<ChatRoom> getAllChatRoom(){return chatRoomRepository.findAll();}

    // 채팅 방삭제
    public void deleteChatRoom(String name){
        ChatRoom chatRoom = chatRoomRepository.findChatRoomByName(name);
        chatRoomRepository.delete(chatRoom);
    }
}
