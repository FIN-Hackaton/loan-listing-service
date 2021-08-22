import React, { useState, Component, useMemo } from "react";
import "./Home.css";
import { getHouse } from "../../util/APIUtils";
import Alert from "react-s-alert";
// import Select from "react-select";
// import Background from '../../../img/background.png';

// 현재시간을 특정 format의 문자열로 반환
const getCurrentTimetoString = () => {
  return new Date().toLocaleString();
};

const CustomOption = ({ innerProps }) => <option {...innerProps}></option>;

// var sectionStyle = {
//   width: "100%",
//   height: "400px",
//   backgroundImage: "url(" + { Background } + ")"
// };

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: "",
      loan_period: "",
      credit: "",
      date: "",
      sel_area1: "서울특별시",
      sel_area2: "",
      sel_area3: "",
    };

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
  }

  // input 태그의 내용에 변화가 발생했을 때 이벤트 처리
  changeInput = event => {
    this.setState({
      [event.target.name]: event.target.value,
      date: getCurrentTimetoString(),
    });
  };

  // form 태그의 submit 이벤트 처리
  submit = event => {
    // form의 submit의 효과로 발생하는 페이지 리로딩 방지
    // 페이지 리로딩이 발생하면 state값이 초기화됨
    // alert('Search Area is: ' + this.state.interest);
    // alert('Search Area is: ' + this.state.loan_period);
    //alert('Search Area is: ' + this.state.sel_area2);

    event.preventDefault();
    // 부모 component로부터 받은 add를 실행
    //this.props.onAdd(this.state);

    // 컴포넌트의 state를 기본값으로 초기화
    this.setState({
      interest: "",
      loan_period: "",
      credit: "",
      date: "",
      sel_area1: "서울특별시",
      sel_area2: "",
      sel_area3: "",
    });

    const searchParameter = Object.assign({}, this.state);
    getHouse(searchParameter)
      .then(response => {
        // console.log(response);
        this.props.history.push({
          pathname: "/map",
          state: { lists: response },
        });
      })
      .catch(error => {
        Alert.error(
          (error && error.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  };

  handleChange1(event) {
    this.state.sel_area1 = "서울특별시";
    this.setState({ sel_area1: event.target.value });
  }

  handleChange2(event) {
    this.setState({ sel_area2: event.target.value });
    if (event.target.value == "강남구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "개포동";
      this.state.sel2 = "논현동";
      this.state.sel3 = "대치동";
      this.state.sel4 = "도곡동";
      this.state.sel5 = "삼성동";
      this.state.sel6 = "세곡동";
      this.state.sel7 = "수서동";
      this.state.sel8 = "신사동";
      this.state.sel9 = "압구정동";
      this.state.sel10 = "역삼동";
      this.state.sel11 = "율현동";
      this.state.sel12 = "일원동";
      this.state.sel13 = "자곡동";
      this.state.sel14 = "첨당동";
    } else if (event.target.value == "강동구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "강일동";
      this.state.sel2 = "상일동";
      this.state.sel3 = "명일동";
      this.state.sel4 = "고덕동";
      this.state.sel5 = "암사동";
      this.state.sel6 = "천호동";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "강북구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "미아동";
      this.state.sel2 = "번동";
      this.state.sel3 = "수유동";
      this.state.sel4 = "우이동";
      this.state.sel5 = "";
      this.state.sel6 = "";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "강서구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "가양동";
      this.state.sel2 = "개화동";
      this.state.sel3 = "공항동";
      this.state.sel4 = "과해동";
      this.state.sel5 = "내발산동";
      this.state.sel6 = "등촌동";
      this.state.sel7 = "마곡동";
      this.state.sel8 = "방화동";
      this.state.sel9 = "염창동";
      this.state.sel10 = "오곡동";
      this.state.sel11 = "오쇠동";
      this.state.sel12 = "외발산동";
      this.state.sel13 = "화곡동";
      this.state.sel14 = "";
    } else if (event.target.value == "관악구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "남현동";
      this.state.sel2 = "봉천동";
      this.state.sel3 = "신림동";
      this.state.sel4 = "";
      this.state.sel5 = "";
      this.state.sel6 = "";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "광진구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "광장동";
      this.state.sel2 = "구의동";
      this.state.sel3 = "군자동";
      this.state.sel4 = "능동";
      this.state.sel5 = "자양동";
      this.state.sel6 = "중곡동";
      this.state.sel7 = "화양동";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "구로구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "가리봉동";
      this.state.sel2 = "개봉동";
      this.state.sel3 = "고척동";
      this.state.sel4 = "구로동";
      this.state.sel5 = "궁동";
      this.state.sel6 = "신도림동";
      this.state.sel7 = "오류동";
      this.state.sel8 = "온수동";
      this.state.sel9 = "천왕동";
      this.state.sel10 = "향동";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "금천구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "가산동";
      this.state.sel2 = "독산동";
      this.state.sel3 = "시흥동";
      this.state.sel4 = "";
      this.state.sel5 = "";
      this.state.sel6 = "";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "노원구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "공릉동";
      this.state.sel2 = "상계동";
      this.state.sel3 = "월계동";
      this.state.sel4 = "중계동";
      this.state.sel5 = "하계동";
      this.state.sel6 = "";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "도봉구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "도봉동";
      this.state.sel2 = "방학동";
      this.state.sel3 = "쌍문동";
      this.state.sel4 = "창동";
      this.state.sel5 = "";
      this.state.sel6 = "";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "동대문구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "답십리동";
      this.state.sel2 = "신설동";
      this.state.sel3 = "용두동";
      this.state.sel4 = "이문동";
      this.state.sel5 = "장안동";
      this.state.sel6 = "전농동";
      this.state.sel7 = "제기동";
      this.state.sel8 = "청량리동";
      this.state.sel9 = "회기동";
      this.state.sel10 = "휘경동";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "동작구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "노량진동";
      this.state.sel2 = "대방동";
      this.state.sel3 = "동작동";
      this.state.sel4 = "본동";
      this.state.sel5 = "사당동";
      this.state.sel6 = "상도1동";
      this.state.sel7 = "상도동";
      this.state.sel8 = "신내방동";
      this.state.sel9 = "흑석동";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "마포구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "공덕동";
      this.state.sel2 = "구수동";
      this.state.sel3 = "노고산동";
      this.state.sel4 = "당인동";
      this.state.sel5 = "대흥동";
      this.state.sel6 = "도화동";
      this.state.sel7 = "동교동";
      this.state.sel8 = "마포동";
      this.state.sel9 = "망원동";
      this.state.sel10 = "상수동";
      this.state.sel11 = "상암동";
      this.state.sel12 = "서교동";
      this.state.sel13 = "성산동";
      this.state.sel14 = "신공덕동";
      this.state.sel15 = "신수동";
      this.state.sel16 = "신정동";
      this.state.sel17 = "아현동";
      this.state.sel18 = "연남동";
      this.state.sel19 = "염리동";
      this.state.sel20 = "용감동";
      this.state.sel21 = "중동";
      this.state.sel22 = "창전동";
      this.state.sel23 = "토정동";
      this.state.sel24 = "하중동";
      this.state.sel25 = "합정동";
      this.state.sel26 = "현석동";
    } else if (event.target.value == "서대문구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "남가좌동";
      this.state.sel2 = "냉청동";
      this.state.sel3 = "대신동";
      this.state.sel4 = "대현동";
      this.state.sel5 = "미근동";
      this.state.sel6 = "봉원동";
      this.state.sel7 = "북가좌동";
      this.state.sel8 = "북아현동";
      this.state.sel9 = "신촌동";
      this.state.sel10 = "연희동";
      this.state.sel11 = "영천동";
      this.state.sel12 = "옥천동";
      this.state.sel13 = "창천동";
      this.state.sel14 = "천연동";
      this.state.sel15 = "충정로2가";
      this.state.sel16 = "충정로3가";
      this.state.sel17 = "합동";
      this.state.sel18 = "현저동";
      this.state.sel19 = "홍은동";
      this.state.sel20 = "홍제동";
    } else if (event.target.value == "서초구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "내곡동";
      this.state.sel2 = "반포동";
      this.state.sel3 = "방배동";
      this.state.sel4 = "서초동";
      this.state.sel5 = "신원동";
      this.state.sel6 = "양재동";
      this.state.sel7 = "염곡동";
      this.state.sel8 = "우연동";
      this.state.sel9 = "원지동";
      this.state.sel10 = "잠원동";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "성동구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "금호동";
      this.state.sel2 = "도선동";
      this.state.sel3 = "마장동";
      this.state.sel4 = "사근동";
      this.state.sel5 = "상왕십리동";
      this.state.sel6 = "성수동";
      this.state.sel7 = "송정동";
      this.state.sel8 = "옥수동";
      this.state.sel9 = "용답동";
      this.state.sel10 = "하왕십리동";
      this.state.sel11 = "행당동";
      this.state.sel12 = "홍익동";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "성북구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "길음동";
      this.state.sel2 = "돈암동";
      this.state.sel3 = "동선동";
      this.state.sel4 = "동서문동";
      this.state.sel5 = "보문동";
      this.state.sel6 = "삼선동";
      this.state.sel7 = "상월곡동";
      this.state.sel8 = "석관동";
      this.state.sel9 = "성북동";
      this.state.sel10 = "안암동";
      this.state.sel11 = "장위동";
      this.state.sel12 = "정릉동";
      this.state.sel13 = "종암동";
      this.state.sel14 = "하월곡동";
    } else if (event.target.value == "송파구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "가락동";
      this.state.sel2 = "거여동";
      this.state.sel3 = "마천동";
      this.state.sel4 = "문정동";
      this.state.sel5 = "방이동";
      this.state.sel6 = "삼전동";
      this.state.sel7 = "석촌동";
      this.state.sel8 = "송파동";
      this.state.sel9 = "신천동";
      this.state.sel10 = "오금동";
      this.state.sel11 = "잠실동";
      this.state.sel12 = "장지동";
      this.state.sel13 = "풍납동";
      this.state.sel14 = "";
    } else if (event.target.value == "양천구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "목동";
      this.state.sel2 = "신월동";
      this.state.sel3 = "신정동";
      this.state.sel4 = "";
      this.state.sel5 = "";
      this.state.sel6 = "";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "영등포구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "당산동";
      this.state.sel2 = "대림동";
      this.state.sel3 = "도림동";
      this.state.sel4 = "문래동";
      this.state.sel5 = "신길동";
      this.state.sel6 = "양평동";
      this.state.sel7 = "양화동";
      this.state.sel8 = "여의도동";
      this.state.sel9 = "영등포동";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "용산구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "갈월동";
      this.state.sel2 = "남영동";
      this.state.sel3 = "도원동";
      this.state.sel4 = "동빙고동";
      this.state.sel5 = "동자동";
      this.state.sel6 = "문배동";
      this.state.sel7 = "보광동";
      this.state.sel8 = "산천동";
      this.state.sel9 = "서계동";
      this.state.sel10 = "서빙고동";
      this.state.sel11 = "신계동";
      this.state.sel12 = "신창동";
      this.state.sel13 = "용문동";
      this.state.sel14 = "용산동";
      this.state.sel15 = "원효로";
      this.state.sel16 = "이촌동";
      this.state.sel17 = "이태원동";
      this.state.sel18 = "주성동";
      this.state.sel19 = "청암동";
      this.state.sel20 = "청파동";
      this.state.sel21 = "한강로";
      this.state.sel22 = "한남동";
      this.state.sel23 = "효창동";
      this.state.sel24 = "후암동";
    } else if (event.target.value == "은평구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "갈현동";
      this.state.sel2 = "구산동";
      this.state.sel3 = "녹번동";
      this.state.sel4 = "대조동";
      this.state.sel5 = "불광동";
      this.state.sel6 = "수색동";
      this.state.sel7 = "신사동";
      this.state.sel8 = "역촌동";
      this.state.sel9 = "용암동";
      this.state.sel10 = "증산동";
      this.state.sel11 = "진관동";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "종로구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "청운효자동";
      this.state.sel2 = "사직동";
      this.state.sel3 = "삼청동";
      this.state.sel4 = "부암동";
      this.state.sel5 = "평창동";
      this.state.sel6 = "무악동";
      this.state.sel7 = "교남동";
      this.state.sel8 = "가회동";
      this.state.sel9 = "종로1가";
      this.state.sel10 = "종로2가";
      this.state.sel11 = "종로3가";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else if (event.target.value == "중구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "소공동";
      this.state.sel2 = "회현동";
      this.state.sel3 = "명동";
      this.state.sel4 = "필동";
      this.state.sel5 = "장충동";
      this.state.sel6 = "광희동";
      this.state.sel7 = "을지로동";
      this.state.sel8 = "신당동";
      this.state.sel9 = "다산동";
      this.state.sel10 = "약수동";
      this.state.sel11 = "청구동";
      this.state.sel12 = "신당5동";
      this.state.sel13 = "동화동";
      this.state.sel14 = "황학동";
    } else if (event.target.value == "중랑구") {
      this.state.sel0 = "전체";
      this.state.sel1 = "망우동";
      this.state.sel2 = "면목동";
      this.state.sel3 = "묵동";
      this.state.sel4 = "상봉동";
      this.state.sel5 = "신내동";
      this.state.sel6 = "중화동";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    } else {
      this.state.sel1 = "";
      this.state.sel2 = "";
      this.state.sel3 = "";
      this.state.sel4 = "";
      this.state.sel5 = "";
      this.state.sel6 = "";
      this.state.sel7 = "";
      this.state.sel8 = "";
      this.state.sel9 = "";
      this.state.sel10 = "";
      this.state.sel11 = "";
      this.state.sel12 = "";
      this.state.sel13 = "";
      this.state.sel14 = "";
    }
  }
  handleChange3(event) {
    this.setState({ sel_area3: event.target.value });
  }

  render() {
    return (
      <div class="a">
        <div className="home-container">
          <div className="container">
            {/* <div className="graf-bg-container">
            <div className="graf-layout">
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
            </div>
          </div> */}
            {/* <section style={ sectionStyle }>
      </section> */}
            {/* <h1 className="home-title">여기저기에 흩어진 정보를 여기저기에서 찾아보세요 </h1>  */}
            <br />
            <img class="fit-picture" src="ment.png" />
            <br />
            <br />
            <br />
            <form onSubmit={this.submit}>
              <label>
                <div className="search-title">
                  <span className="span-text">본인 자산</span>
                  {/* <span className="span-text">대출 희망 금액</span> */}
                  <span className="span-text">월 부담 가능 이자</span>

                  <div class="container">
                    <select
                      name="credit"
                      value={this.state.credit}
                      onChange={this.changeInput}
                    >
                      <option value="">선택</option>
                      <option value="10000000">1000만원 이하 </option>
                      <option value="50000000">5000만원 이하 </option>
                      <option value="100000000">1억원 이하 </option>
                      <option value="300000000">3억원 이하 </option>
                      <option value="500000000">5억원 이하 </option>
                      <option value="1000000000">10억원 이하 </option>
                      <option value="1000000000">10억 초과 </option>
                    </select>
                    {/* <select
                      name="loan_period"
                      value={this.state.loan_period}
                      onChange={this.changeInput}
                    >
                      <option value="">선택</option>
                      <option value="35000000">3500만원</option>
                      <option value="50000000">5000만원 이하 </option>
                      <option value="100000000">1억원 이하 </option>
                      <option value="150000000">1억5천만원 이하 </option>
                      <option value="200000000">2억원 이하 </option>
                      <option value="200000000">2억원 초과 </option>
                    </select> */}

                    <select
                      name="interest"
                      value={this.state.interest}
                      onChange={this.changeInput}
                    >
                      <option value="">선택</option>
                      <option value="100000">10만원 이하</option>
                      <option value="300000">30만원 이하 </option>
                      <option value="500000">50만원 이하 </option>
                      <option value="700000">70만원 이하 </option>
                      <option value="1000000">100만원 이하 </option>
                      <option value="1500000">150만원 이하 </option>
                      <option value="1800000">180만원 이하 </option>
                    </select>
                  </div>
                </div>
              </label>

              {/* <form onSubmit={this.handleSubmit}> */}
              <label>
                지역 선택:
                <select
                  name="sel_area1"
                  value={this.state.sel_area1}
                  onChange={this.handleChange1}
                >
                  <option value="서울특별시">서울시</option>
                  <option value="경기도">경기도</option>
                  <option value="인천시">인천시</option>
                  <option value="부산시">부산시</option>
                  <option value="대전시">대전시</option>
                  <option value="대구시">대구시</option>
                  <option value="울산시">울산시</option>
                  <option value="세종시">세종시</option>
                  <option value="광주시">광주시</option>
                  <option value="강원도">강원도</option>
                  <option value="충청북도">충청북도</option>
                  <option value="충청남도">충청남도</option>
                  <option value="경상북도">경상북도</option>
                  <option value="경상남도">경상남도</option>
                  <option value="전라북도">전라북도</option>
                  <option value="전라남도">전라남도</option>
                  <option value="제주도">제주도</option>
                </select>
                <select
                  name="sel_area2"
                  value={this.state.sel_area2}
                  onChange={this.handleChange2}
                >
                  <option value="전체">전체</option>
                  <option value="강남구">강남구</option>
                  <option value="강동구">강동구</option>
                  <option value="강북구">강북구</option>
                  <option value="강서구">강서구</option>
                  <option value="관악구">관악구</option>
                  <option value="광진구">광진구</option>
                  <option value="구로구">구로구</option>
                  <option value="금천구">금천구</option>
                  <option value="노원구">노원구</option>
                  <option value="도봉구">도봉구</option>
                  <option value="동대문구">동대문구</option>
                  <option value="마포구">마포구</option>
                  <option value="서대문구">서대문구</option>
                  <option value="서초구">서초구</option>
                  <option value="성동구">성동구</option>
                  <option value="성북구">성북구</option>
                  <option value="송파구">송파구</option>
                  <option value="양천구">양천구</option>
                  <option value="영등포구">영등포구</option>
                  <option value="용산구">용산구</option>
                  <option value="은평구">은평구</option>
                  <option value="종로구">종로구</option>
                  <option value="중구">중구</option>
                  <option value="중랑구">중랑구</option>
                </select>
                {/* <Select
        value={selectedOption}
        onChange={this.handleChange}
        options={options}
      /> */}
                <select
                  name="sel_area3"
                  onChange={this.handleChange3}
                  defaultValue={this.state.sel1}
                >
                  <option name={this.state.sel0} value={this.state.sel0}>
                    {this.state.sel0}
                  </option>
                  <option name={this.state.sel1} value={this.state.sel1}>
                    {this.state.sel1}
                  </option>
                  <option name={this.state.sel2} value={this.state.sel2}>
                    {this.state.sel2}
                  </option>
                  <option name={this.state.sel3} value={this.state.sel3}>
                    {this.state.sel3}
                  </option>
                  <option name={this.state.sel4} value={this.state.sel4}>
                    {this.state.sel4}
                  </option>
                  <option name={this.state.sel5} value={this.state.sel5}>
                    {this.state.sel5}
                  </option>
                  <option name={this.state.sel6} value={this.state.sel6}>
                    {this.state.sel6}
                  </option>
                  <option name={this.state.sel7} value={this.state.sel7}>
                    {this.state.sel7}
                  </option>
                  <option name={this.state.sel8} value={this.state.sel8}>
                    {this.state.sel8}
                  </option>
                  <option name={this.state.sel9} value={this.state.sel9}>
                    {this.state.sel9}
                  </option>
                  <option name={this.state.sel10} value={this.state.sel10}>
                    {this.state.sel10}
                  </option>
                  <option name={this.state.sel11} value={this.state.sel11}>
                    {this.state.sel11}
                  </option>
                  <option name={this.state.sel12} value={this.state.sel12}>
                    {this.state.sel12}
                  </option>
                  <option name={this.state.sel13} value={this.state.sel13}>
                    {this.state.sel13}
                  </option>
                  <option name={this.state.sel14} value={this.state.sel14}>
                    {this.state.sel14}
                  </option>
                </select>
              </label>

              {/* <input type="submit" value="검색" /> */}
              {/* </form> */}

              {/* <button id="searchbtn" type="submit">
              검색
            </button> */}
              <button id="searchbtn" type="submit">
                <img name="search" src="/search.png"></img>
              </button>
              <div>
                {this.state.interest} {this.state.loan_period}{" "}
                {this.state.credit} {this.state.sel_area1}{" "}
                {this.state.sel_area2} {this.state.sel_area3}
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
