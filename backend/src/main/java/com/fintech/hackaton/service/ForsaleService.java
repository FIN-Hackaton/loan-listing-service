package com.fintech.hackaton.service;

import com.fintech.hackaton.model.Forsaleinfo;
import com.fintech.hackaton.repository.ForsaleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ForsaleService {
    private static ForsaleRepository forsaleRepository;

    @Autowired
    public ForsaleService(ForsaleRepository forsaleRepository) {
        this.forsaleRepository = forsaleRepository;
    }

        // 모두 조회
    @Transactional
    public List<Forsaleinfo> findAll() {
        //List<Forsaleinfo> SaleList = new ArrayList<>();
        return new ArrayList<>(forsaleRepository.findAll());
    }

}
