package com.fintech.hackaton.service;

import com.fintech.hackaton.model.Forsaleinfo;
import com.fintech.hackaton.model.House;
import com.fintech.hackaton.model.Loan;
import com.fintech.hackaton.model.Subway;
import com.fintech.hackaton.repository.SubwayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class SubwayService {
    private static SubwayRepository subwayRepository;

    @Autowired
    public SubwayService(SubwayRepository subwayRepository) {
        SubwayService.subwayRepository = subwayRepository;
    }

    @Transactional
    public List<Subway> findAll() {
        return new ArrayList<>(subwayRepository.findAll());
    }
}
