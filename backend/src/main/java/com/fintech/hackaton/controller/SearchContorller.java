package com.fintech.hackaton.controller;


import com.fintech.hackaton.model.House;
import com.fintech.hackaton.service.HouseService;
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

    @PostMapping("/house")
    @ResponseBody
    public HashMap<Object, Object> json(@RequestBody HashMap<Object, Object> param) {
//        System.out.println("param : " + param);  //요청값
        HashMap<Object, Object> result = new HashMap<Object, Object>();  //리턴값

        String dbCity = (String) param.get("sel_area1");
        String dbGu = (String) param.get("sel_area2");
        String dbDong = (String) param.get("sel_area3");
        String dbInterest = (String) param.get("interest"); // 월부담 가능이자
        String dbCredit = (String) param.get("credit"); // 본인자산
        String dbLoan = (String) param.get("loan_period"); // 대출희망금액

//        System.out.println(dbCity);
//        System.out.println(dbGu);
//        System.out.println(dbDong);
        System.out.println(dbInterest);
        System.out.println(dbCredit);
        System.out.println(dbLoan);

        List<House> houseData = new ArrayList<>();
        if ((Objects.equals(dbDong, "")) && (Objects.equals(dbGu, ""))) { // 서울특별시 전부
            houseData = houseService.houseFindAll();
        } else if (Objects.equals(dbDong, "")) {
            houseData = houseService.houseFindGu(dbGu);
        } else {
            houseData = houseService.houseFindCity(dbGu, dbDong);
        }
        System.out.println(houseData);
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


            result.put(id, aptInfo);
//            System.out.println(id);
//            System.out.println(result);
        }
//        System.out.println(result);
        return result;
    }

}