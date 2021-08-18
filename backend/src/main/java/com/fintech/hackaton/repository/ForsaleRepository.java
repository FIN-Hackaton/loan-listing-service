package com.fintech.hackaton.repository;

import com.fintech.hackaton.model.Forsaleinfo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ForsaleRepository extends JpaRepository<Forsaleinfo,Long> {
     //select * from stock where stockname in ('DSR','STX','KEC','삼성전자','NAVER');
    @Query(value = "SELECT s.name, s.latitude, s.longitude FROM forsale s ", nativeQuery = true)
    List<Forsaleinfo> findSaleInfoBySearch(List<String> param); // 종목이름으로 DB에서 검색

//    boolean existsStockByStockname(String stockName); // 종목이름이 DB에 있는지 없는지

    //Optional<Forsaleinfo> findByName(String name);
//    List<Forsaleinfo> findAll();
//    List<Forsaleinfo> find


}
