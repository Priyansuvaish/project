package com.acadamicerp.Acadamicerp.Bean;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "domain")
public class Domain {
    @Id
    @Column(name="domain_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int domain_id;

    @Column(name="program", nullable = false)
    private String program;

    @Column(name="batch", nullable = false)
    private String batch;

    @Column(name="capacity", nullable = false)
    private int capacity;

    @Column(name="qualification", nullable = false)
    private String qualification;
    public Domain(){

    }

    public void setDomain_id(int domain_id) {
        this.domain_id = domain_id;
    }

    public void setProgram(String program) {
        this.program = program;
    }

    public void setBatch(String batch) {
        this.batch = batch;
    }

    public void setCapacity(int capacity) {
        this.capacity = capacity;
    }

    public void setQualification(String qualification) {
        this.qualification = qualification;
    }
    public Domain(int domain_id, String program, String batch, int capacity, String qualification){

        this.domain_id = domain_id;
        this.program = program;
        this.batch = batch;
        this.capacity = capacity;
        this.qualification = qualification;

    }
}
