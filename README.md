# **빅데이터 기반 청년 맞춤 대출추천부터 매물정보까지 올인원 웹서비스**



## 실행방법

1. frontend (.env파일 필요(키))

```bash
npm install # 필요 모듈설치
npm start
--------------------------
pm2 start npm -- start
```

2. backend (application.yml 필요)

```bash
./gradlew build # 빌드 (frontend 영역까지 통합 빌드)
java -jar ./build/libs/hackaton-0.0.1-SNAPSHOT.jar # 빌드 된 jar파일 실행
---------------------------
nohup java -jar ./build/libs/hackaton-0.0.1-SNAPSHOT.jar > mylog.log 2>&1 &
```

---

## 기획배경

> 거주를 위한 20~30대 청년층(직장인, 신혼부부)은 전세자금 마련을 위해 수 많은 주거정책과 신용대출상품을 비교하며 많은 시간 할애

> 2개 이상의 대출 상품을 이용하는 경우 고려 사항 증가

> ‘대출한도’ 와 ‘대출가능매물’ 동시 고려를 위해 은행과 부동산을 번갈아 이용해야 하며 확인해야 하는 번거로움 존재 

---

## 기능

### 로그인 기능

>Google, Naver, Kakao (facebook, github 로그인은 막아둠)

> 이메일 가입 (이메일 중복 가입 불가)

### 검색기능

> 월 부담 가능 이자금액(월 평균 상환액),  개인자산, 지역(시군구동)

- 월 부담 가능 이자금액을 이용하여 DB에서 조건에 해당하는 대출상품을 찾는다
- 대출 상품 리스트 중 최대한도를 구해, 그 최대한도와 개인자산을 더하여 가능한 부동산 매물을 DB에서 검색한다.
- 위 정보들을 모두 지도페이지에 넘긴다.

### 지도기능

> 부동산 매물들을 마커로 지도위에 표시한다.

> 마커를 클릭 시 그 마커의 간단한 정보가 나오며, 상세보기를 누르면 사이드바가 열리며, 매물 정보와 함께 가능한 대출상품리스트가 나온다.

> 지하철버튼을 누르면 지하철역 위치가 마커로 표시된다.

---


## 발표자료
[발표자료 PDF](https://github.com/FIN-Hackaton/loan-listing-service/blob/main/docs/%EC%97%AC%EA%B8%B0%EC%A0%80%EA%B8%B0%20%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C%20(Everywhere%EC%A1%B0)%20%EB%A7%88%EC%A7%80%EB%A7%89.pdf)

[발표자료 WIKI](https://github.com/FIN-Hackaton/loan-listing-service/wiki)

