package com.fintech.hackaton.controller;

import com.fintech.hackaton.model.Forsaleinfo;
import com.fintech.hackaton.model.Subway;
import com.fintech.hackaton.service.HouseService;
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
    public HashMap<Object, Object> json(@RequestBody HashMap<Object, Object> param){
        System.out.println("param : " + param);  //요청값


        HashMap<Object, Object> result = new HashMap<Object, Object>();  //리턴값

        List<Subway> subway_data = subwayService.findAll();
        System.out.println(subway_data);
        //Optional<Forsaleinfo> sale = forsaleService.findByName(name);

        result.put("RESULT","성공!");
        return result;
    }
}
