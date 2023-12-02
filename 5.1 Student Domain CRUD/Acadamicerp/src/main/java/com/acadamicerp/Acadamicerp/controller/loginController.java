package com.acadamicerp.Acadamicerp.controller;

import com.acadamicerp.Acadamicerp.Bean.employee;
import com.acadamicerp.Acadamicerp.Repositry.LoginDAO;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin("http://localhost:3000")
public class loginController {
    private final LoginDAO loginDAO;

    public loginController(LoginDAO loginDAO) {
        this.loginDAO = loginDAO;
    }

    @PostMapping("/login")
    employee verify(@RequestBody employee employee){
        employee e= loginDAO.findByEmail(employee.getEmail());
        if(e!=null && e.getDepartment()==1 && Objects.equals(e.getPassword(), employee.getPassword())){
            return e;
        }
        return null;
    }

    @GetMapping("/login/detail")
    List<employee> getAllDomain(){
        return loginDAO.findAll();
    }
}
