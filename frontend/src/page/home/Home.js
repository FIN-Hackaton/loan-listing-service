import React, { Component } from "react";
import "./Home.css";
import { test } from "../../util/APIUtils";
import Alert from "react-s-alert";

// 현재시간을 특정 format의 문자열로 반환
const getCurrentTimetoString = () => {
  return new Date().toLocaleString();
};

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      interest: "",
      area: "",
      credit: "",
      date: "",
    };
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
    event.preventDefault();
    // 부모 component로부터 받은 add를 실행
    //this.props.onAdd(this.state);

    // 컴포넌트의 state를 기본값으로 초기화
    this.setState({
      interest: "",
      area: "",
      credit: "",
      date: "",
    });

    const searchParameter = Object.assign({}, this.state);
    test(searchParameter)
      .then(response => {
        console.log(response);
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

  render() {
    return (
      <div className="home-container">
        <div className="container">
          <div className="graf-bg-container">
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
          </div>
          <h1 className="home-title">Fintech-Hackaton </h1>

          <p className="search-title">
            월 부담 가능 이자
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            거주 희망 지역
            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
            개인 신용 등급
          </p>
          <form onSubmit={this.submit}>
            <div class="container">
              {/* <label id="first">월 부담 가능 이자</label> */}
              <input
                id="search"
                placeholder="월 부담 가능 이자 "
                type="number"
                name="interest"
                value={this.state.interest}
                onChange={this.changeInput}
              />
              {/* <label id="second">거주 희망 지역</label> */}
              <input
                id="search"
                placeholder="거주 희망 지역 "
                name="area"
                value={this.state.area}
                onChange={this.changeInput}
              />

              {/* <label id="third">개인 신용 등급</label> */}
              <input
                id="search"
                placeholder="개인 신용 등급 "
                name="credit"
                value={this.state.credit}
                onChange={this.changeInput}
              />
            </div>

            <button id="searchbtn" type="submit">
              추가
            </button>
            <div>
              {this.state.interest} {this.state.area} {this.state.credit}
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Home;
