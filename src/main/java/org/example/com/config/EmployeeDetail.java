package org.example.com.config;

import lombok.Data;
import org.example.com.domain.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collection;
@Data
public class EmployeeDetail implements UserDetails {

    private final PasswordEncoder passwordEncoder;

    public EmployeeDetail(PasswordEncoder passwordEncoder, Employee employee) {
        this.passwordEncoder = passwordEncoder;
        this.employee = employee;
    }

    private Employee employee;
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return passwordEncoder.encode(employee.getPassword());
    }

    @Override
    public String getUsername() {
        return employee.getName();
    }


    @Override
    public boolean isEnabled() {
        return true;
    }
}
