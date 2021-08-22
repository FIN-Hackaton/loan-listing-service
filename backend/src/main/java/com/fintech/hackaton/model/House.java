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
@Entity(name = "home")
public class House {

    @Id // Primary Key
    @Column(nullable = true, unique = true, length = 255)
    private Long id;

    @Column(nullable = true, length = 255)
    private String atclnm;

    @Column(nullable = true, length = 255)
    private String rlettpnm;

    @Column(nullable = true, length = 255)
    private String tradtpnm;

    @Column(nullable = true, length = 255)
    private String flrinfo;

    @Column(nullable = true, length = 255)
    private String rentprc;

    @Column(nullable = true, length = 255)
    private String handprc;

    @Column(nullable = true, length = 255)
    private String price;

    @Column(nullable = true, length = 255)
    private String spc1;

    @Column(nullable = true, length = 255)
    private String spc2;

    @Column(nullable = true, length = 255)
    private String atclcfmymd;

    @Column(nullable = true, length = 255)
    private String lat;

    @Column(nullable = true, length = 255)
    private String lng;

    @Column(nullable = true, length = 255)
    private String atclfetrdesc;

    @Column(nullable = true, length = 255)
    private String taglist;

    @Column(nullable = true, length = 255)
    private String bildnm;
    @Column(nullable = true, length = 255)
    private String cpnm;

    @Column(nullable = true, length = 255)
    private String rltrnm;

    @Column(nullable = true, length = 255)
    private String addrcity;

    @Column(nullable = true, length = 255)
    private String addrgu;

    @Column(nullable = true, length = 255)
    private String addrdong;
}
