package org.example.com.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.example.com.type.Dept;
import org.example.com.type.Position;
import org.hibernate.annotations.GenericGenerator;

import java.time.LocalDateTime;
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    @Enumerated(EnumType.STRING)
    private Dept dept;
    private String userId;
    private String password;
    @Enumerated(EnumType.STRING)
    private Position position;
    private LocalDateTime dateOfJoining;

    public static Employee employee(String name, Dept dept, Position position){
        return Employee.builder()
                .name(name)
                .dept(dept)
                .position(position)
                .dateOfJoining(LocalDateTime.now())
                .build();
    }
}
