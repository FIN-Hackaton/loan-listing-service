package com.fintech.hackaton.repository;

import com.fintech.hackaton.model.Loan;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {

    // 대출상품  희망 가격보단 크고, 희망 이자보다 작은 것 조회
    @Query(value = "SELECT * FROM loan l WHERE l.price >= ?1 and l.interestMonth <=?2", nativeQuery = true)
    List<Loan> findGoodsByLoan(Integer price, Integer interestMonth);


}
