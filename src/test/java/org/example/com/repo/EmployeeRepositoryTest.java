package org.example.com.repo;

import org.example.com.domain.Employee;
import org.example.com.type.Dept;
import org.example.com.type.Position;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class EmployeeRepositoryTest {

    @Autowired
    EmployeeRepository employeeRepository;


    @Test
    public void test(){
        Employee employee1 = Employee.builder()
                .name("홍길동")
                .dept(Dept.Tech01)
                .position(Position.Assistant)
                .dateOfJoining(LocalDateTime.now())
                .userId("user1")
                .password("1234")
                .build();

        Employee employee2 = Employee.builder()
                .name("강호동")
                .dept(Dept.Tech01)
                .position(Position.Assistant)
                .dateOfJoining(LocalDateTime.now())
                .userId("user2")
                .password("1234")
                .build();
        Employee employee3 = Employee.builder()
                .name("아무개")
                .dept(Dept.Tech01)
                .position(Position.Assistant)
                .dateOfJoining(LocalDateTime.now())
                .userId("user3")
                .password("1234")
                .build();

        Employee employee4 = Employee.builder()
                .name("김지수")
                .dept(Dept.Tech02)
                .position(Position.Intern)
                .dateOfJoining(LocalDateTime.now())
                .userId("user4")
                .password("1234")
                .build();
        employeeRepository.save(employee1);
        employeeRepository.save(employee2);
        employeeRepository.save(employee3);
        employeeRepository.save(employee4);
    }

}