# **빅데이터 기반 청년 맞춤 대출추천부터 매물정보까지 올인원 웹서비스**



## [임시] 실행방법

1. frontend로 폴더 이동

```bash
npm install # 필요 모듈설치
npm start
```

2. backend로 폴더 이동

```bash
./gradlew build # 빌드 (frontend 영역까지 통합 빌드)
java -jar ./build/libs/hackaton-0.0.1-SNAPSHOT.jar # 빌드 된 jar파일 실행
```

---

## 기획배경

> 거주를 위한 20~30대 청년층(직장인, 신혼부부)은 전세자금 마련을 위해 수 많은 주거정책과 신용대출상품을 비교하며 많은 시간 할애

> 2개 이상의 대출 상품을 이용하는 경우 고려 사항 증가

> ‘대출한도’ 와 ‘대출가능매물’ 동시 고려를 위해 은행과 부동산을 번갈아 이용해야 하며 확인해야 하는 번거로움 존재 

---

## 기능

### 로그인 기능

>Google, Naver, Kakao

> 이메일 가입

이메일 중복 가입 불가

facebook, github 로그인은 막아둠 (필요하면 넣겠지만, 없으면 삭제예정)

[이슈](https://github.com/FIN-Hackaton/loan-listing-service/issues/2)

### 검색기능

> 월 부담 가능 이자금액(월 평균 상환액), 지역(시군구동), 신용점수,.....

### 지도기능

#### 목표: 검색하면, DB에서 조건에 해당하는 대출상품을 찾고, 대출상품과 개인자산과 대출한도를 합친 금액 내의 매물 검색 후 지도에 매물을 띄어줌

> DB에 있는 모든 매물정보 지도에 띄어줌


## 발표자료
[발표자료](https://github.com/FIN-Hackaton/loan-listing-service/blob/main/docs/%EC%97%AC%EA%B8%B0%EC%A0%80%EA%B8%B0%20%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C%20(Everywhere%EC%A1%B0)%20%EB%A7%88%EC%A7%80%EB%A7%89.pdf)
