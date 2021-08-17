package com.fintech.hackaton.controller;


import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.util.HashMap;

@RestController
public class testController {

    @PostMapping("/api/hello")
    @ResponseBody
    public HashMap<Object, Object> json(@RequestBody  HashMap<Object, Object> param){
        System.out.println(param);  //요청값
        HashMap<Object, Object> result = new HashMap<Object, Object>();  //리턴값
        result.put("RESULT","성공!");
        return result;
    }

//    public List<Map<String, Object>> hello() {
//
//
//        List<Map<String, Object>> listMap = new ArrayList<Map<String, Object>>();
//        Map<String, Object> map = new HashMap<>();
//        map.put("USER_ID", "AAA");
//        map.put("PROG_ID", "KEBA1111");
//        map.put("PROG_NAME", "KEBAKE");
//        map.put("PHONE_NUM", "010-1111-1111");
//
//        listMap.add(map);
//        return listMap;
//    }
}
