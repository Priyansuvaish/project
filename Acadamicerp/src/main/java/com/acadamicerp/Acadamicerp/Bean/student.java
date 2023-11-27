package com.acadamicerp.Acadamicerp.Bean;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name = "student")
public class student {
    @Id
    @Column(name="student_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int student_id;

    @Column(name="roll_number", nullable = false,unique = true)
    private String roll_number;

    @Column(name="first_name", nullable = false)
    private String first_name;

    @Column(name="last_name", nullable = false)
    private String last_name;

    @Column(name="email", nullable = false,unique = true)
    private String email;

    @Column(name="photograph_path")
    private String photograph_path;

    @Column(name="cgpa",nullable = false,columnDefinition = "float default 0.0")
    private float cgpa;

    @Column(name="total_credits",nullable = false)
    private float total_credits;

    @Column(name="graduation_year")
    private int graduation_year;

    @Column(name = "domain",nullable = true,columnDefinition = "float default 3")
    private int domain;

    @Column(name="placement_id",columnDefinition = "int default 0")
    private int placement_id;

    @Column(name="specialisation",columnDefinition = "int default 0")
    private int specialisation;

    public student(){

    }

    public void setStudent_id(int student_id) {
        this.student_id = student_id;
    }

    public void setRoll_number(String roll_number) {
        this.roll_number = roll_number;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPhotograph_path(String photograph_path) {
        this.photograph_path = photograph_path;
    }

    public void setCgpa(float cgpa) {
        this.cgpa = cgpa;
    }

    public void setTotal_credits(float total_credits) {
        this.total_credits = total_credits;
    }

    public void setGraduation_year(int graduation_year) {
        this.graduation_year = graduation_year;
    }

    public void setDomain(int domain) {
        this.domain = domain;
    }

    public void setPlacement_id(int placement_id) {
        this.placement_id = placement_id;
    }

    public void setSpecialisation(int specialisation) {
        this.specialisation = specialisation;
    }

    public student(int student_id, String roll_number, String first_name, String last_name, String email, String photograph_path, float cgpa, float total_credits, int graduation_year, int domain, int placement_id, int specialisation){

        this.student_id = student_id;
        this.roll_number = roll_number;
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.photograph_path = photograph_path;
        this.cgpa = cgpa;
        this.total_credits = total_credits;
        this.graduation_year = graduation_year;
        this.domain = domain;
        this.specialisation = specialisation;
        this.placement_id = placement_id;

    }
}

