package com.acadamicerp.Acadamicerp.Bean;

import jakarta.persistence.*;
import lombok.Getter;

@Getter
@Entity
@Table(name ="empolyee")
public class employee {
    @Id
    @Column(name="empolyee_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int employee_id;
    @Column(name="first_name",nullable = false)
    private String first_name;

    @Column(name="last_name",nullable = true)
    private String last_name;

    @Column(name="email",nullable=false,unique = true)
    private String email;

    @Column(name="password",nullable = false)
    private String password;

    @Column(name="title",nullable = false)
    private String title;

    @Column(name="photograph_path",nullable = false)
    private String photograph_path;

    @Column(name="departement",nullable = true)
    private int department;


    public employee(){

    }

    public void setEmployee_id(int employee_id) {
        this.employee_id = employee_id;
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

    public void setPass(String password) {
        this.password = password;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setPhotograph_path(String photograph_path) {
        this.photograph_path = photograph_path;
    }

    public void setDepartment(int department) {
        this.department = department;
    }

    public employee(int employee_id,String first_name,String last_name,String email,String pass,String title,String photograph_path,int department){
        this.employee_id=employee_id;
        this.first_name=first_name;
        this.last_name=last_name;
        this.email=email;
        this.password=pass;
        this.title=title;
        this.photograph_path=photograph_path;
        this.department=department;
    }

}

