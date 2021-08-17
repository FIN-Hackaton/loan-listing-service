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

  return (
    <div style={styles.content}>
      <h1>매물 상세정보</h1>
      <span>위치:A</span>
      <br />
      <span>공인중개사명:A </span>
      <span>전화번호:A</span>
      <div style={styles.divider} />

      {/* <a href="index.html" style={styles.sidebarLink}></a> */}
      <h3>대출 추천상품</h3>
      {links}
    </div>
  );
};

Sidebar.propTypes = {
  style: PropTypes.object,
};

export default Sidebar;
