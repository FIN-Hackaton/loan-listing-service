package com.fintech.hackaton.service;

import com.fintech.hackaton.model.Loan;
import com.fintech.hackaton.repository.LoanRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@Service
public class LoanService {
    private static LoanRepository loanRepository;

    @Autowired
    public LoanService(LoanRepository loanRepository) {
        LoanService.loanRepository = loanRepository;
    }

    // 모두 조회
    @Transactional
    public List<Loan> loanFindAll() {
        //List<Forsaleinfo> SaleList = new ArrayList<>();
        return new ArrayList<>(loanRepository.findAll());
    }

//    // 중복제거 모두 조회
//    @Transactional
//    public List<House> houseDistinctFindAll() {
//        return new ArrayList<>(houseRepository.findDistinctByLatAndLng());
//    }

    //    // 시군구/ 읍면동 조회 조회
//    @Transactional
//    public List<House> houseFindCity(String gu, String dong) {
//        return new ArrayList<>(houseRepository.findHouseByCity(gu, dong));
//    }
//
//    // 시군구 조회 조회
//    @Transactional
//    public List<House> houseFindGu(String gu) {
//        return new ArrayList<>(houseRepository.findHouseByGu(gu));
//    }
//
    // 지역 + (본인자산+대출희망금액) 검색
    // 시군구 조회 조회
    @Transactional
    public List<Loan> loanFindinterset(Integer price, Integer interest) {
        return new ArrayList<>(loanRepository.findGoodsByLoan(price, interest));
    }


}
