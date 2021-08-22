package com.fintech.hackaton.controller;


import com.fintech.hackaton.model.House;
import com.fintech.hackaton.model.Loan;
import com.fintech.hackaton.service.HouseService;
import com.fintech.hackaton.service.LoanService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Objects;

@RequiredArgsConstructor
@RequestMapping(value = "/search", produces = {MediaType.APPLICATION_JSON_VALUE})
@RestController
public class SearchContorller {
    final HouseService houseService;
    final LoanService loanService;

    @PostMapping("/house")
    @ResponseBody
    public HashMap<Object, Object> json(@RequestBody HashMap<Object, Object> param) {
//        System.out.println("param : " + param);  //요청값
        HashMap<Object, Object> result = new HashMap<Object, Object>();  //리턴값

        String dbCity = (String) param.get("sel_area1");
        String dbGu = (String) param.get("sel_area2");
        String dbDong = (String) param.get("sel_area3");
        int dbInterest = Integer.parseInt((String) param.get("interest")); // 월부담 가능이자
        int dbCredit = Integer.parseInt((String) param.get("credit")); // 본인자산
        int dbLoan = Integer.parseInt((String) param.get("loan_period")); // 대출희망금액

//        System.out.println(dbCity);
//        System.out.println(dbGu);
//        System.out.println(dbDong);
        System.out.println("이자" + dbInterest);
        System.out.println("자산" + dbCredit);
        System.out.println("대출금액" + dbLoan);


        int buyPrice = dbCredit + dbLoan; // 본인자산+대출희망금액 검색
        System.out.println(buyPrice);

//        대출 상품 검색
        List<Loan> loanData = new ArrayList<>();
        if ((dbInterest == 0) && (dbCredit == 0) && (dbLoan == 0)) { // 서울특별시 전부
            loanData = loanService.loanFindAll();
        } else {
            loanData = loanService.loanFindinterset(dbLoan, dbInterest);
        }

        System.out.println(loanData);

        HashMap<Object, Object> loanInfos = new HashMap<Object, Object>();

        int loanId = 0;
        for (Loan data : loanData) {
            HashMap<Object, Object> loanInfo = new HashMap<Object, Object>();
            String finName = data.getFinName();
            String goodName = data.getGoodName();
            String interstType = data.getInterestType();
            String repayType = data.getRepayType();
            String interestLow = data.getInterestLow();
            String interestHigh = data.getInterestHigh();
            int interestMonth = data.getInterestMonth();
            int price = data.getPrice();
            String info = data.getInfo();

            loanInfo.put("finName", finName);
            loanInfo.put("goodName", goodName);
            loanInfo.put("interstType", interstType);
            loanInfo.put("repayType", repayType);
            loanInfo.put("interestLow", interestLow);
            loanInfo.put("interestHigh", interestHigh);
            loanInfo.put("interestMonth", interestMonth);
            loanInfo.put("price", price);
            loanInfo.put("info", info);

            loanInfos.put(loanId,loanInfo);
            loanId += 1;
        }


//        부동산 매물 검색
        List<House> houseData = new ArrayList<>();
        if ((Objects.equals(dbDong, "")) && (Objects.equals(dbGu, ""))) { // 서울특별시 전부
            houseData = houseService.houseFindAll();
        } else if (Objects.equals(dbDong, "")) {
            houseData = houseService.houseFindGuCredit(dbGu, buyPrice);
        } else {
            houseData = houseService.houseFindCityCredit(dbGu, dbDong, buyPrice);
        }

//        System.out.println(houseData);
        for (House data : houseData) {
            Long id = data.getId();
            String aptName = data.getAtclnm();
            String aptDong = data.getBildnm();
            String aptFloor = data.getFlrinfo();
            String aptPrice = data.getHandprc();
            String aptSpace = data.getSpc1();
            Double lat = Double.valueOf(data.getLat());
            Double lng = Double.valueOf(data.getLng());
            String addrCity = data.getAddrcity();
            String addrgu = data.getAddrgu();
            String addrDong = data.getAddrdong();
            String estateName = data.getRltrnm();
            String rentmy = data.getTradtpnm();


            HashMap<Object, Object> aptInfo = new HashMap<Object, Object>();
            HashMap<Object, Object> position = new HashMap<Object, Object>();

            aptInfo.put("name", aptName);
            aptInfo.put("dong", aptDong);
            aptInfo.put("floor", aptFloor);
            aptInfo.put("price", aptPrice);
            aptInfo.put("space", aptSpace);
            aptInfo.put("addrCity", addrCity);
            aptInfo.put("addrgu", addrgu);
            aptInfo.put("addrDong", addrDong);
            aptInfo.put("estateName", estateName);
            aptInfo.put("rentMy", rentmy);
            position.put("lat", lat);
            position.put("lng", lng);
            aptInfo.put("position", position);
            aptInfo.put("loanData", loanInfos);


            result.put(id, aptInfo);
//            System.out.println(id);
//            System.out.println(result);
        }
        System.out.println(loanInfos);
        return result;
    }

}