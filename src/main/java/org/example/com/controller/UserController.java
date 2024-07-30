package org.example.com.controller;

import org.example.com.config.EmployeeDetail;
import org.example.com.config.PrincipleDetailService;
import org.example.com.domain.Employee;
import org.example.com.dto.UserDto;
import org.example.com.repo.EmployeeRepository;
import org.example.com.util.U;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;
    private final PrincipleDetailService principleDetailService;

    public UserController(EmployeeRepository employeeRepository, PasswordEncoder passwordEncoder, PrincipleDetailService principleDetailService) {
        this.employeeRepository = employeeRepository;
        this.passwordEncoder = passwordEncoder;
        this.principleDetailService = principleDetailService;
    }

    @PostMapping("/user/login")
    public ResponseEntity<?> login(@RequestBody UserDto userDto){
        EmployeeDetail employee = (EmployeeDetail) principleDetailService
                .loadUserByUsername(userDto.getUserId())
                ;
        if(employee == null)
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        return ResponseEntity.ok(employee);
    }

    @GetMapping("/user")
    public ResponseEntity<?> getUser() {
        Employee employee = employeeRepository
                .findEmployeeByUserId(U.getLoggedUser().getUserId());
        return ResponseEntity.ok(employee);
    }


}
