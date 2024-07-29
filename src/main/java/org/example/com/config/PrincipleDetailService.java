package org.example.com.config;

import org.example.com.domain.Employee;
import org.example.com.repo.EmployeeRepository;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class PrincipleDetailService implements UserDetailsService {

    private final EmployeeRepository employeeRepository;
    private final PasswordEncoder passwordEncoder;

    public PrincipleDetailService(EmployeeRepository employeeRepository, PasswordEncoder passwordEncoder) {
        this.employeeRepository = employeeRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @Override
    public UserDetails loadUserByUsername(String userId) throws UsernameNotFoundException {
        Employee employee = employeeRepository.findEmployeeByUserId(userId.toUpperCase());
        EmployeeDetail user = new EmployeeDetail(passwordEncoder, employee);
        if(employee == null)
            return null;
        else
            return user;
    }
}
