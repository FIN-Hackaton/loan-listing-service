import React, { Component } from "react";
import Map from "./Map.js";
import Sidebar from "react-sidebar";
import SidebarContent from "./Sidebar.js";

const styles = {
  content: {
    marginTop: "60px",
    height: "cal(100vh -60px)",
  },
  sidebar: {
    // paddingTop: "60px",
    marginTop: "60px",
    width: "18vw",
    height: "cal(100vh -60px)",
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

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({ docked: !this.state.docked });
    // if (this.state["docked"] === false) {
    //   this.setState({ docked: 1 });
    // } else {
    //   this.setState({ docked: 0 });
    // }
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
      transitions: this.state.transitions,
      styles: styles,
    };

    return (
      <Sidebar {...sidebarProps}>
        <button onClick={this.toggleMenu}>Click me!</button>
        {/* <Map /> */}
        <Map sideControl={this.toggleMenu} />
      </Sidebar>
    );
  }
}

export default MapPage;
