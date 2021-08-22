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
@Entity(name = "loan")

public class Loan {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String finName;

    @Column(nullable = false)
    private String goodName;

    @Column(nullable = false)
    private String interestType;

    @Column(nullable = false)
    private String repayType;

    @Column(nullable = false)
    private String interestLow;

    @Column(nullable = false)
    private String interestHigh;

    @Column(nullable = false)
    private Integer interestMonth;

    @Column(nullable = false)
    private Integer price;

    @Column(nullable = true)
    private String info;

}
