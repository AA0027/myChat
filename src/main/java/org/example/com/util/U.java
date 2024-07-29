package org.example.com.util;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.example.com.config.EmployeeDetail;
import org.example.com.domain.Employee;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

public class U {
    public static Employee getLoggedUser(){
        EmployeeDetail userDetails = (EmployeeDetail) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return userDetails.getEmployee();
    }

    // 현재 request 구하기
    public static HttpServletRequest getRequest() {
        ServletRequestAttributes attrs = (ServletRequestAttributes) RequestContextHolder.currentRequestAttributes();
        return attrs.getRequest();
    }


    // 현재 session 구하기
    public static HttpSession getSession() {
        return getRequest().getSession();
    }

}
