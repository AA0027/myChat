package org.example.com.service;

import org.example.com.domain.MessageLog;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.Page;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class MessageLogServiceTest {

    @Autowired
    MessageLogService messageLogService;

    @Test
    public void test(){
       Page<MessageLog> list = messageLogService.getPageChannelLog("/sub/16",0, 5);
       list.getContent().forEach(System.out::println);
    }
}