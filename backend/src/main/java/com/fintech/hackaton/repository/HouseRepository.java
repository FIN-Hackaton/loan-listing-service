package com.fintech.hackaton.repository;

import com.fintech.hackaton.model.Forsaleinfo;
import com.fintech.hackaton.model.House;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HouseRepository extends JpaRepository<House, Long> {
    //select * from stock where stockname in ('DSR','STX','KEC','삼성전자','NAVER');
//    @Query(value = "SELECT s.name, s.latitude, s.longitude FROM forsale s ", nativeQuery = true)
//    List<Forsaleinfo> findSaleInfoBySearch(List<String> param); // 종목이름으로 DB에서 검색

//    boolean existsStockByStockname(String stockName); // 종목이름이 DB에 있는지 없는지

    //Optional<Forsaleinfo> findByName(String name);
//    List<Forsaleinfo> findAll();
//    List<Forsaleinfo> find

//    List<House> findDistinctByLatAndLng();


    // select * from stock where stockname in ('DSR','STX','KEC','삼성전자','NAVER');
//    @Query(value = "SELECT h.no, h.atclnm, h.rlettpnm, h.tradtpnm ,h.flrinfo ,h.rentprc ,h.handprc ,h.spc1 ,h.spc2 ,h.atclcfmymd ,h.lat ,h.lng ,h.atclfetrdesc ,h.taglist ,h.bildnm ,h.cpnm ,h.rltrnm , h.addrcity ,h.addrgu,h.addrdong FROM home h  WHERE h.addrgu  IN ?1", nativeQuery = true)
//
    @Query(value = "SELECT * FROM home h WHERE h.addrdong = ?1 and h.addrgu = ?2", nativeQuery = true)
    List<House> findHouseByCity(String gu, String dong);


    @Query(value = "SELECT * FROM home h WHERE h.addrdong = ?1", nativeQuery = true)
    List<House> findHouseByGu(String gu);
}
