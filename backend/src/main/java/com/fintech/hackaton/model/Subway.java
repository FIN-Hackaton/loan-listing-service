package com.fintech.hackaton.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity(name = "subway")

public class Subway {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String lineno;

    @Column(nullable = false)
    private String linenum;

    @Column(nullable = false)
    private String engname;

    @Column(nullable = false)
    private String chiname;

    @Column(nullable = false)
    private String transno;

    @Column(nullable = false)
    private Integer subwaycol;

    @Column(nullable = false)
    private Integer stat;

    @Column(nullable = true)
    private String area;

    @Column(nullable = true)
    private String tel;

    @Column(nullable = true)
    private String update;

    @Column(nullable = true)
    private String lat;

    @Column(nullable = true)
    private String lng;

}
