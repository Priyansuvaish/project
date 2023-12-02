package com.acadamicerp.Acadamicerp.Repositry;

import org.springframework.data.jpa.repository.JpaRepository;
import com.acadamicerp.Acadamicerp.Bean.employee;
public interface LoginDAO extends JpaRepository<employee,Integer> {
    public employee findByEmail(String s);
}
