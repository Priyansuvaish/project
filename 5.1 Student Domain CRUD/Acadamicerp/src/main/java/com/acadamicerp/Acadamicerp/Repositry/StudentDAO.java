package com.acadamicerp.Acadamicerp.Repositry;

import com.acadamicerp.Acadamicerp.Bean.Domain;
import com.acadamicerp.Acadamicerp.Bean.student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentDAO extends JpaRepository<student,Integer> {
    public List<student> findByDomain(Domain i);
}
