package com.acadamicerp.Acadamicerp.controller;

import com.acadamicerp.Acadamicerp.Bean.Domain;
import com.acadamicerp.Acadamicerp.Repositry.DomainDAO;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin("http://localhost:3000")
public class DomainController {

    private final DomainDAO DomainDAO;

    public DomainController(DomainDAO DomainDAO) {
        this.DomainDAO = DomainDAO;
    }

    @PostMapping("/domain/get")
    Domain newdomain(@RequestBody Domain newdomian){
        return  DomainDAO.save(newdomian);
    }

    @GetMapping("/domain/detail")
    List<Domain> getAllDomain(){
        return DomainDAO.findAll();
    }

    @GetMapping("/domain/{id}")
    Domain getId(@PathVariable int id){
        return DomainDAO.findById(id).orElse(null);
    }
    @PutMapping("/domain/update/{id}")
    Domain update(@RequestBody Domain newdomian,@PathVariable int id){
        Domain d= DomainDAO.findById(id).orElse(null);
        if(d!=null){
            d.setBatch(newdomian.getBatch());
            d.setCapacity(newdomian.getCapacity());
            d.setProgram(newdomian.getProgram());
            d.setQualification(newdomian.getQualification());
            DomainDAO.save(d);
            return d;
        }
        return null;
    }
}

