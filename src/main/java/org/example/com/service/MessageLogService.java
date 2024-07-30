package org.example.com.service;

import org.example.com.domain.MessageLog;
import org.example.com.repo.MessageLogRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageLogService {

    private final MessageLogRepository messageLogRepository;

    public MessageLogService(MessageLogRepository messageLogRepository) {
        this.messageLogRepository = messageLogRepository;
    }

    public void messageLog(MessageLog messageLog){
        messageLogRepository.save(messageLog);
    }

    public List<MessageLog> getChannelLog(String url){
        List<MessageLog> messageLogByUrl = messageLogRepository
                .findMessageLogByUrl(url);
        return messageLogByUrl;
    }

    public Page<MessageLog> getPageChannelLog(String url, int page, int size){
        Pageable pageable = PageRequest.of(page, size);
        return messageLogRepository.findByUrlOrderByRegdateDesc(url, pageable);
    }
}
