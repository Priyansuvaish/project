package com.acadamicerp.Acadamicerp.Repositry;

import com.acadamicerp.Acadamicerp.Bean.student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentDAO extends JpaRepository<student,Integer> {
}
