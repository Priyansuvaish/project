package com.acadamicerp.Acadamicerp.controller;

import com.acadamicerp.Acadamicerp.Bean.Domain;
import com.acadamicerp.Acadamicerp.Bean.student;
import com.acadamicerp.Acadamicerp.Repositry.StudentDAO;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
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

    @GetMapping("/student/detail/{id}")
    List<student> getdeatail(@PathVariable Domain id){
       return StudentDAO.findByDomain(id);
    }
}
