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
    //           λμΆμν: {goodName}
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
              λμΆμν: {loanDatas[ind].goodName}
            </a> */}
            <p>λμΆμν: {loanDatas[ind].goodName}</p>
            <p>λμΆκΈ: {loanDatas[ind].price}</p>
            <p>μνκ·  μνμ‘: {loanDatas[ind].interestMonth}μ</p>
            <p>
              μ΄μμ¨: {loanDatas[ind].interestLow} ~{" "}
              {loanDatas[ind].interestHigh}
            </p>

            <p>μν: {loanDatas[ind].finName}</p>
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
      <h1>λ§€λ¬Ό μμΈμ λ³΄</h1>
      <p>
        μ΄λ¦: {name} {name_dong}
      </p>
      {/* <p>μΈ΅μ: {floor}</p> */}
      <p>λ©΄μ : {space}γ‘</p>
      <p>κ°κ²©: {price}</p>
      <p>
        μμΉ: {city} {gu} {dong}
      </p>
      <span>κ³΅μΈμ€κ°μ¬λͺ: {estateName} </span>
      <p>μ νλ²νΈ: 010-7794-7934</p>
      <a href="http://www.brighthouse.co.kr/?NaPm=ct%3Dksn4to0w%7Cci%3D0zK0000abw9v_NXM1eXd%7Ctr%3Dsa%7Chk%3D8d37d23d44aa1e41abea60f61d3a7a4ef0ac57e6">
        λΆλμ° μ°κ²°
      </a>
      <div style={styles.divider} />

      {/* <a href="index.html" style={styles.sidebarLink}></a> */}
      <h2>λμΆ μΆμ²μν</h2>

      {/* <button>λ¬Όμν</button> */}
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
