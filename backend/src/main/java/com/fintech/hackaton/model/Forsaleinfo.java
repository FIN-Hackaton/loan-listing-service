package com.fintech.hackaton.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "forsale")
public class Forsaleinfo {

    @Id // Primary Key
    @Column(nullable = true, unique = true, length = 255)
    private Long id;

    @Column(nullable = true, unique = true, length = 255)
    private String name;

    @Column(nullable = true, length = 255)
    private Double latitude;

    @Column(nullable = true, length = 255)
    private Double longitude;

    @Column(nullable = true, length = 255)
    private String jeonse;

    @Column(nullable = true, length = 255)
    private String loan;

    @Column(nullable = true, length = 255)
    private Long interest;

    @Column(nullable = true, length = 255)
    private String area1;

    @Column(nullable = true, length = 255)
    private String area2;

    @Column(nullable = true, length = 255)
    private String area3;

    @Column(nullable = true, length = 255)
    private String credit;
}
