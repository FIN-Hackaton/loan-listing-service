package com.fintech.hackaton;

import com.fintech.hackaton.config.AppProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AppProperties.class)
public class HackatonApplication {

    public static void main(String[] args) {
        SpringApplication.run(HackatonApplication.class, args);
    }

}
