package com.fintech.hackaton.controller;


import com.fintech.hackaton.model.Forsaleinfo;
import com.fintech.hackaton.service.ForsaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequiredArgsConstructor
@RequestMapping(value = "/search", produces = {MediaType.APPLICATION_JSON_VALUE})
@RestController
public class SearchContorller {
    final ForsaleService forsaleService;

    @PostMapping("/house")
    @ResponseBody
    public HashMap<Object, Object> json(@RequestBody HashMap<Object, Object> param) {
        System.out.println("param : " + param);  //요청값
        String getName = (String) param.get("sel_area1");
        System.out.println("select param : " + getName);
        HashMap<Object, Object> result = new HashMap<Object, Object>();  //리턴값

        List<Forsaleinfo> saleData = forsaleService.findAll();
        for (Forsaleinfo data : saleData) {
            Long id = data.getId();
            String name = data.getName();
            Double lat = data.getLatitude();
            Double lng = data.getLongitude();
            String jeonse = data.getJeonse();
            HashMap<Object,Object> test = new HashMap<Object, Object>();
            HashMap<Object,Object> position = new HashMap<Object, Object>();
//            test.add(id);
            test.put("name",name);
            test.put("lat",lat);
            test.put("lng",lng);
            test.put("jeonse",jeonse);
            position.put("lat",lat);
            position.put("lng",lng);
            test.put("position",position);
//            test.put("name",name);


            result.put(id, test);
        }
        //Optional<Forsaleinfo> sale = forsaleService.findByName(name);

//        result.put("RESULT", "OK");
        return result;
    }

}