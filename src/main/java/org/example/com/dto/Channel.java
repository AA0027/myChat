package org.example.com.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.example.com.domain.ChatRoom;
import org.example.com.domain.Employee;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Channel {
    private String name;
    private Long url;
    private List<Employee> employees;

    public static Channel createChannel(ChatRoom chatRoom){
        return Channel.builder()
                .url(chatRoom.getId())
                .name(chatRoom.getName())
                .employees(chatRoom.getEmployees())
                .build();
    }
}
