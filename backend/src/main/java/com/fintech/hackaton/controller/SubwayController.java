package com.fintech.hackaton.controller;

import com.fintech.hackaton.model.Loan;
import com.fintech.hackaton.model.Subway;
import com.fintech.hackaton.service.SubwayService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RequiredArgsConstructor
@RequestMapping(value = "/search", produces = {MediaType.APPLICATION_JSON_VALUE})
@RestController
public class SubwayController {

    final SubwayService subwayService;

    @PostMapping("/subway")
    @ResponseBody
    public HashMap<Object, Object> json(@RequestBody HashMap<Object, Object> param) {
//        System.out.println("param : " + param);  //요청값


        HashMap<Object, Object> result = new HashMap<Object, Object>();  //리턴값

        List<Subway> subway_data = subwayService.findAll();
//        System.out.println(subway_data);
        //Optional<Forsaleinfo> sale = forsaleService.findByName(name);

        HashMap<Object, Object> subways = new HashMap<Object, Object>();

        int loanId = 0;
        for (Subway data : subway_data) {
            HashMap<Object, Object> subway = new HashMap<Object, Object>();
            HashMap<Object, Object> position = new HashMap<Object, Object>();

            Long id = data.getId();
            String name = data.getName();
            String lat = data.get위도();
            String lng = data.get경도();

            position.put("lat", lat);
            position.put("lng", lng);

            subway.put("name", name);
            subway.put("position", position);

            subways.put(id, subway);
        }
        return subways;
    }
}
