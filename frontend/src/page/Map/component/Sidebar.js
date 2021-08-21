import React from "react";
import PropTypes from "prop-types";

const styles = {
  sidebar: {
    width: "20vw",
    height: "100vh",
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

  for (let ind = 0; ind < 10; ind++) {
    links.push(
      <a key={ind} href="#" style={styles.sidebarLink}>
        대출상품 {ind}
      </a>
    );
  }

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
  }

  return (
    <div style={styles.content}>
      <h1>매물 상세정보</h1>
      <p>
        이름: {name} {name_dong}
      </p>
      <p>층수: {floor}</p>
      <p>면적: {space}</p>
      <p>가격: {price}</p>
      <span>
        위치: {city} {dong} {gu}
      </span>
      <br />
      <span>공인중개사명: {estateName} </span>
      {/* <span>전화번호:A</span> */}
      <div style={styles.divider} />

      {/* <a href="index.html" style={styles.sidebarLink}></a> */}
      <h2>대출 추천상품</h2>
      <button>물음표</button>
      {links}
    </div>
  );
};

Sidebar.propTypes = {
  style: PropTypes.object,
};

export default Sidebar;
