package com.fintech.hackaton.repository;

import com.fintech.hackaton.model.Subway;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SubwayRepository extends JpaRepository<Subway,Long> {


//    List<Subway> findAll();
}
