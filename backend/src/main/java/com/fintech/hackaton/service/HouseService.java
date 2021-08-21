package com.fintech.hackaton.service;

import com.fintech.hackaton.model.House;
import com.fintech.hackaton.repository.HouseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class HouseService {
    private static HouseRepository houseRepository;

    @Autowired
    public HouseService(HouseRepository houseRepository) {
        HouseService.houseRepository = houseRepository;
    }

    // 모두 조회
    @Transactional
    public List<House> houseFindAll() {
        //List<Forsaleinfo> SaleList = new ArrayList<>();
        return new ArrayList<>(houseRepository.findAll());
    }

//    // 중복제거 모두 조회
//    @Transactional
//    public List<House> houseDistinctFindAll() {
//        return new ArrayList<>(houseRepository.findDistinctByLatAndLng());
//    }

    // 시군구/ 읍면동 조회 조회
    @Transactional
    public List<House> houseFindCity(String gu, String dong) {
        return new ArrayList<>(houseRepository.findHouseByCity(gu, dong));
    }

    // 시군구 조회 조회
    @Transactional
    public List<House> houseFindGu(String gu) {
        return new ArrayList<>(houseRepository.findHouseByGu(gu));
    }

}
