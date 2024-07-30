package org.example.com.controller;

import org.example.com.domain.Employee;
import org.example.com.domain.MessageLog;
import org.example.com.dto.ChatMessage;
import org.example.com.repo.EmployeeRepository;
import org.example.com.service.MessageLogService;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.time.LocalDateTime;

@Controller
public class MessageController {
    private final SimpMessagingTemplate simpMessagingTemplate;
    private final EmployeeRepository employeeRepository;
    private final MessageLogService messageLogService;
    public MessageController(SimpMessagingTemplate simpMessagingTemplate, EmployeeRepository employeeRepository, MessageLogService messageLogService) {
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.employeeRepository = employeeRepository;
        this.messageLogService = messageLogService;
    }


    @MessageMapping("/{roomId}")
    public void greeting(@DestinationVariable Long roomId, ChatMessage message) throws Exception {
        Thread.sleep(1000); // simulated delay

//         메세지 로그저장
        Employee employee = employeeRepository.findEmployeeByUserId(message.getSender());
        MessageLog log = MessageLog.builder()
                .content(message.getContent())
                .employee(employee)
                .regdate(LocalDateTime.now())
                .url("/sub/" + roomId)
                .build();

        messageLogService.messageLog(log);
//         메세지 로그저장 end

        simpMessagingTemplate.convertAndSend("/sub/" + roomId, message);

    }

}