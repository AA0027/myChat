package org.example.com.domain;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.springframework.stereotype.Controller;

import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class ChatRoom {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String name;

    @OneToMany
    @JoinColumn(name = "chat_room_id")
    private List<Employee> employees = new ArrayList<>();

    public static ChatRoom createRoom(String name){
        return ChatRoom.builder()
                .name(name)
                .build();
    }


}
