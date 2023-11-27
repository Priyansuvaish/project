package com.acadamicerp.Acadamicerp.controller;

import com.acadamicerp.Acadamicerp.Bean.student;
import com.acadamicerp.Acadamicerp.Repositry.StudentDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

public class StudentController {
    @Autowired
    private StudentDAO StudentDAO;
    @PostMapping("/student/get")
    student newstudent(@RequestBody student newstudent){
        return StudentDAO.save(newstudent);
    }
    @GetMapping("/student/detail")
    List<student> getAllDomain(){
        return StudentDAO.findAll();
    }
}
