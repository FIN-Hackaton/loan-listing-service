import React from "react";
import Map from "./component/Map.js";
import Sidebar from "react-sidebar";
import SidebarContent from "./component/Sidebar.js";
import "./MapPage.css";

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
      placeInfo: [],
    };

    this.sideBarOn = this.sideBarOn.bind(this);
    this.sideBarOff = this.sideBarOff.bind(this);

    // console.log(this.props.location.state);
  }

  // 닫혀있을 때 마커만 클릭했을 때 장소정보만 sidebar...
  ifOffSidebar = place => {
    this.setState({ placeInfo: place });
  };

  sideBarOn = place => {
    // console.log("MapPage", sidebarCheck);
    // this.setState({ docked: !this.state.docked });
    // console.log("sideBar", place);
    this.setState({ docked: true, placeInfo: place });
  };

  sideBarOff() {
    this.setState({ docked: false });
  }

  render() {
    // console.log(this.state);
    // console.log(this.state.placeInfo);
    const sidebar = (
      <SidebarContent
        places={this.props.location.state}
        places2={this.state.placeInfo}
      />
    );

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
        <div class="nav_user" role="tablist">
          <ul>
            <li class="item_line">
              <a>매매</a>
            </li>
            <li class="item_line">
              <a>전세</a>
            </li>
            <li class="item_line">
              <a>월세</a>
            </li>
            <li class="item_line">
              <a>지하철</a>
            </li>
          </ul>
        </div>
        {/* <Map /> */}
        <Map
          sideBarOn={this.sideBarOn}
          sideBarOff={this.sideBarOff}
          ifOffSidebar={this.ifOffSidebar}
          places={this.props.location.state}
        />
      </Sidebar>
    );
  }
}

export default MapPage;
