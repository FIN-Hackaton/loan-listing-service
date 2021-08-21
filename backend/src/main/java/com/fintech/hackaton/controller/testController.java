package com.fintech.hackaton.controller;


import com.fintech.hackaton.model.Forsaleinfo;
import com.fintech.hackaton.service.ForsaleService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RequiredArgsConstructor
@RequestMapping(value = "/sales", produces = {MediaType.APPLICATION_JSON_VALUE})
@RestController
public class testController {
    final ForsaleService forsaleService;

    @PostMapping("/api/hello")
    @ResponseBody
    public HashMap<Object, Object> json(@RequestBody  HashMap<Object, Object> param){
        System.out.println("param : " + param);  //요청값


        HashMap<Object, Object> result = new HashMap<Object, Object>();  //리턴값

        List<Forsaleinfo> saleData = forsaleService.findAll();
        System.out.println(saleData);
        //Optional<Forsaleinfo> sale = forsaleService.findByName(name);

        result.put("RESULT","성공!");
        return result;
    }

}
