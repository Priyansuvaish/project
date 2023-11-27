package com.acadamicerp.Acadamicerp.controller;

import com.acadamicerp.Acadamicerp.Bean.student;
import com.acadamicerp.Acadamicerp.Repositry.StudentDAO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController

public class StudentController {
    private final StudentDAO StudentDAO;
    public StudentController(StudentDAO StudentDAO) {
        this.StudentDAO = StudentDAO;
    }
    @PostMapping("/student/get")
    student newstudent(@RequestBody student newstudent){
        return StudentDAO.save(newstudent);
    }
    @GetMapping("/student/detail")
    List<student> getAllDomain(){
        return StudentDAO.findAll();
    }
}
