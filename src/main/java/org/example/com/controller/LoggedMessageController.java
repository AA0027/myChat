package org.example.com.controller;

import org.example.com.domain.Employee;
import org.example.com.domain.MessageLog;
import org.example.com.dto.ChatMessage;
import org.example.com.repo.EmployeeRepository;
import org.example.com.service.MessageLogService;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class LoggedMessageController {
    private final MessageLogService messageLogService;
    private final EmployeeRepository employeeRepository;

    public LoggedMessageController(MessageLogService messageLogService, EmployeeRepository employeeRepository) {
        this.messageLogService = messageLogService;
        this.employeeRepository = employeeRepository;
    }

//    @GetMapping("/messages/{roomId}")
//    public ResponseEntity<?> getLoggedMessages(@PathVariable Long roomId
//            , @RequestParam(defaultValue = "0", value = "page") int page
//            ,@RequestParam(defaultValue = "5", required = false) int size
//    ){
//        String url = "/sub/" + roomId;
//        Page<MessageLog> list =  messageLogService.getPageChannelLog(url,page,size);
//        ResponseEntity<Page<MessageLog>> ok = ResponseEntity.ok(list);
//        return ok;
//    }

    @GetMapping("/messages/{roomId}")
    public ResponseEntity<?> getLoggedMessages(@PathVariable Long roomId){
        String url = "/sub/" + roomId;
        List<MessageLog> list =  messageLogService.getChannelLog(url);
        ResponseEntity<List<MessageLog>> ok = ResponseEntity.ok(list);
        return ok;
    }
}

/*
*
* private String content;
    private Employee employee;
    private LocalDateTime regdate;
    private String url;
*
* */