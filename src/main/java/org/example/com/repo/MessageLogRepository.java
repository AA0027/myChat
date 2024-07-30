package org.example.com.repo;

import org.example.com.domain.MessageLog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface MessageLogRepository extends MongoRepository<MessageLog, String> {
    List<MessageLog> findMessageLogByUrl(String url);


    Page<MessageLog> findByUrlOrderByRegdateDesc(String url, Pageable pageable);
}
