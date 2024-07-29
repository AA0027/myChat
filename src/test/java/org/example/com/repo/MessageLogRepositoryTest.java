package org.example.com.repo;

import org.example.com.domain.MessageLog;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;
@SpringBootTest
class MessageLogRepositoryTest {


    @Autowired
    MessageLogRepository messageLogRepository;

    @Test
    public void test(){

    }
}