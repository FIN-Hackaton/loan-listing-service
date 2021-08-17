import React, { Component } from "react";
import Map from "./Map.js";
import Sidebar from "react-sidebar";

import SidebarContent from "./Sidebar.js";
const mql = window.matchMedia(`(min-width: 800px)`);

// import { Breadcrumb, Layout, Menu } from "antd";
// import {
//   NotificationOutlined,
//   UserOutlined,
//   LaptopOutlined,
// } from "@ant-design/icons";

// const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const styles = {
  root: {
    position: "none",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: "hidden",
  },
  content: {
    // padding: "60px",
  },
};

class MapPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      docked: false,
      transitions: true,
      touch: true,
      shadow: true,
    };

    this.renderPropCheckbox = this.renderPropCheckbox.bind(this);
    this.renderPropNumber = this.renderPropNumber.bind(this);
    this.onSetOpen = this.onSetOpen.bind(this);
    this.menuButtonClick = this.menuButtonClick.bind(this);
  }

  onSetOpen(open) {
    this.setState({ open });
  }

  menuButtonClick(ev) {
    ev.preventDefault();
    this.onSetOpen(!this.state.open);
  }

  renderPropCheckbox(prop) {
    const toggleMethod = ev => {
      const newState = {};
      newState[prop] = ev.target.checked;
      this.setState(newState);
    };

    return (
      <p key={prop}>
        <label htmlFor={prop}>
          <input
            type="checkbox"
            onChange={toggleMethod}
            checked={this.state[prop]}
            id={prop}
          />
          {prop}
        </label>
      </p>
    );
  }
  renderPropNumber(prop) {
    const setMethod = ev => {
      const newState = {};
      newState[prop] = parseInt(ev.target.value, 10);
      this.setState(newState);
    };

    return (
      <p key={prop}>
        {prop}{" "}
        <input type="number" onChange={setMethod} value={this.state[prop]} />
      </p>
    );
  }

  render() {
    const sidebar = <SidebarContent />;

    const sidebarProps = {
      sidebar,
      docked: this.state.docked,
      sidebarClassName: "custom-sidebar-class",
      contentId: "custom-sidebar-content-id",
      touch: this.state.touch,
      shadow: this.state.shadow,
      touchHandleWidth: this.state.touchHandleWidth,
      dragToggleDistance: this.state.dragToggleDistance,
      transitions: this.state.transitions,
    };

    return (
      <Sidebar {...sidebarProps}>
        <div style={styles.content}>
          <Map />
          {["docked"].map(this.renderPropCheckbox)}
          {/* {["touchHandleWidth", "dragToggleDistance"].map(
            this.renderPropNumber
          )} */}
        </div>
      </Sidebar>
    );
  }
}

export default MapPage;
