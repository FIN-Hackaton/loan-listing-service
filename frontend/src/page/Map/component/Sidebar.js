import React from "react";
import PropTypes from "prop-types";

const styles = {
  sidebar: {
    width: "20vw",
    height: "cal(100vh-60px)",
  },
  sidebarLink: {
    display: "block",
    padding: "16px 0px",
    color: "#757575",
    textDecoration: "none",
  },
  divider: {
    margin: "8px 0",
    height: 1,
    backgroundColor: "#757575",
  },
  content: {
    padding: "16px",
    height: "100vh",
    backgroundColor: "white",
  },
};

const Sidebar = props => {
  console.log(props);

  const style = props.style
    ? { ...styles.sidebar, ...props.style }
    : styles.sidebar;

  const links = [];

  const shuffleArray = array => {
    for (let i = 0; i < Object.keys(array).length; i++) {
      let j = Math.floor(Math.random() * (i + 1));
      // [array[i], array[j]] = [array[j], array[i]];
      const x = array[i];
      array[i] = array[j];
      array[j] = x;
    }
    return array;
  };

  if (props.places2) {
    var name = props.places2.name;
    var name_dong = props.places2.dong;
    var floor = props.places2.floor;
    var price = props.places2.price;
    var space = props.places2.space;

    var city = props.places2.addrCity;
    var dong = props.places2.addrDong;
    var gu = props.places2.addrgu;

    var estateName = props.places2.estateName;

    var loanDatas = props.places2.loanData;

    // if (loanDatas) {
    //   loanDatas = shuffleArray(loanDatas);
    //   for (let ind = 0; ind < 10; ind++) {
    //     var loanData = loanDatas[ind];
    //     console.log();
    //     var goodName = loanData.goodName;
    //     links.push(
    //       <div>
    //         <a key={ind} href="#" style={styles.sidebarLink}>
    //           대출상품: {goodName}
    //         </a>
    //         <div style={styles.divider} />
    //       </div>
    //     );
    //   }
    // }
  }

  const rendering = () => {
    const result = [];
    if (loanDatas) {
      for (let i = 0; i < Object.keys(loanDatas).length; i++) {
        let j = Math.floor(Math.random() * (i + 1));
        // [array[i], array[j]] = [array[j], array[i]];
        const x = loanDatas[i];
        loanDatas[i] = loanDatas[j];
        loanDatas[j] = x;
      }
      for (let ind = 0; ind < 10; ind++) {
        result.push(
          <div>
            {/* <a key={ind} href="#" style={styles.sidebarLink}>
              대출상품: {loanDatas[ind].goodName}
            </a> */}
            <p>대출상품: {loanDatas[ind].goodName}</p>
            <p>대출금: {loanDatas[ind].price}</p>
            <p>월평균 상환액: {loanDatas[ind].interestMonth}원</p>
            <p>
              이자율: {loanDatas[ind].interestLow} ~{" "}
              {loanDatas[ind].interestHigh}
            </p>

            <p>은행: {loanDatas[ind].finName}</p>
            <div style={styles.divider} />
          </div>
        );
      }
      result.sort(function (a, b) {
        return a.props.children[1].props.children[1] <
          b.props.children[1].props.children[1]
          ? -1
          : a.props.children[1].props.children[1] >
            b.props.children[1].props.children[1]
          ? 1
          : 0;
      });

      // console.log(result);
      return result;
    }
  };

  return (
    <div style={styles.content}>
      <h1>매물 상세정보</h1>
      <p>
        이름: {name} {name_dong}
      </p>
      {/* <p>층수: {floor}</p> */}
      <p>면적: {space}</p>
      <p>가격: {price}</p>
      <span>
        위치: {city} {dong} {gu}
      </span>
      <br />
      <span>공인중개사명: {estateName} </span>
      <p>전화번호: 010-7794-7934</p>
      <a href="http://www.brighthouse.co.kr/?NaPm=ct%3Dksn4to0w%7Cci%3D0zK0000abw9v_NXM1eXd%7Ctr%3Dsa%7Chk%3D8d37d23d44aa1e41abea60f61d3a7a4ef0ac57e6">
        부동산 연결
      </a>
      <div style={styles.divider} />

      {/* <a href="index.html" style={styles.sidebarLink}></a> */}
      <h2>대출 추천상품</h2>

      {/* <button>물음표</button> */}
      <button>
        <img src="/help.png"></img>
      </button>
      {rendering()}
    </div>
  );
};

Sidebar.propTypes = {
  style: PropTypes.object,
};

export default Sidebar;
