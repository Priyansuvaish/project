package com.acadamicerp.Acadamicerp.controller;

import com.acadamicerp.Acadamicerp.Bean.Domain;
import com.acadamicerp.Acadamicerp.Repositry.DomainDAO;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class DomainController {

    private final DomainDAO DomainDAO;

    public DomainController(DomainDAO DomainDAO) {
        this.DomainDAO = DomainDAO;
    }

    @PostMapping("/domain/get")
    Domain newdomain(@RequestBody Domain newdomian){
        return  DomainDAO.save(newdomian);
    }
    @CrossOrigin("3000")
    @GetMapping("/domain/detail")
    List<Domain> getAllDomain(){
        return DomainDAO.findAll();
    }
}

