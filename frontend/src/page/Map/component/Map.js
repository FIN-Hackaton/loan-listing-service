import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx.js";
import MarkerCluster from "./Cluster";
import "./Map.css";
import { getSubway } from "../../../util/APIUtils";
import Alert from "react-s-alert";

// const HOME_PATH = window.HOME_PATH || ".";
var places = [];
var newCenterLng, newCenterLat; // 매물들의 좌표 중앙값 구하기
const subwayList = [];

class MapInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      // center: { lat: 37.3595704, lng: 127.105399 },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    // console.log(this.props);
    // DB로부터 받은 매물 정보 사용가능하게 변환
    const placeLists = this.props.places.lists;
    // const placeLists = [];
    // console.log(placeLists);
    var leftTop = { lat: 37.3595704, lng: 127.105399 };
    var rightBottom = { lat: 37.3595704, lng: 127.105399 };
    var maxLat = 0;
    var maxLng = 0;

    for (var key in placeLists) {
      places.push(placeLists[key]);
      // 매물들의 좌표 중앙값 구하기
      if (placeLists[key].position.lat > maxLat) {
        maxLat = placeLists[key].position.lat;
        leftTop = {
          lat: placeLists[key].position.lat,
          lng: placeLists[key].position.lng,
        };
      }
      if (placeLists[key].position.lng > maxLng) {
        maxLng = placeLists[key].position.lng;
        rightBottom = {
          lat: placeLists[key].position.lat,
          lng: placeLists[key].position.lng,
        };
      }
    }

    newCenterLat = (leftTop.lat + rightBottom.lat) / 2;
    newCenterLng = (leftTop.lng + rightBottom.lng) / 2;
    console.log(newCenterLat, newCenterLng);

    // console.log(places);
  }

  onMarkerClick = props => {
    // console.log(props);
    // console.log(props.marker);
    this.setState({
      selectedPlace: props.marker,
      activeMarker: props.entry,
      showingInfoWindow: true,
    });
    this.props.ifOffSidebar(this.state.selectedPlace); // 사이드바가 닫혀있을 때 마커를 클릭했을 때 장소정보만 전달sidebar...
  };

  // showDetails = place => {
  //   console.log(place);
  // };

  onEventChecker = (e, aug, geo) => {
    console.log(e);
    console.log(aug);
    console.log(geo);
  };

  displayMarkers = () => {
    return (
      <MarkerCluster markers={places} click={this.onMarkerClick}>
        {(places = [])}
      </MarkerCluster>
    );
  };

  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
      this.props.sideBarOff();
    }
  };

  displayInfoWindows = () => {
    return (
      <InfoWindowEx
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        <div>
          <h3>
            {this.state.selectedPlace.name} {this.state.selectedPlace.dong}
          </h3>
          <p>
            {this.state.selectedPlace.rentMy}: {this.state.selectedPlace.price}
          </p>
          <button
            class="detail_btn"
            type="button"
            onClick={() => {
              this.props.sideBarOn(this.state.selectedPlace);
            }}
          >
            상세정보
          </button>
        </div>
      </InfoWindowEx>
    );
  };

  displaySubwayMarkers = () => {
    // console.log(this.state);
    // console.log(places);
    return subwayList.map((place, i) => {
      console.log("subway");
      return (
        <Marker
          key={place[0]}
          position={{ lat: place[1].lat, lng: place[1].lng }}
          // label={store.title}
          label={place[0]}
          place_={place}
          animation={0} // {BOUNCE: 1, DROP: 2, Lq: 3, Iq: 4}
          // onClick={this.onMarkerClick}
          icon="/subway3.png"
        />
      );
    });
  };

  submit = event => {
    // form의 submit의 효과로 발생하는 페이지 리로딩 방지
    // 페이지 리로딩이 발생하면 state값이 초기화됨

    event.preventDefault();
    // 부모 component로부터 받은 add를 실행
    //this.props.onAdd(this.state);

    // 컴포넌트의 state를 기본값으로 초기화
    this.setState({});

    const searchSubwayParam = Object.assign({}, this.state);
    getSubway(searchSubwayParam)
      .then(response => {
        // console.log(response);

        for (var id in response) {
          // console.log(response[id].name);
          subwayList.push([response[id].name, response[id].position]);
        }
        console.log(subwayList);
      })
      .catch(error => {
        Alert.error(
          (error && error.message) ||
            "Oops! Something went wrong. Please try again!"
        );
      });
  };

  render() {
    const googleMap = this.props.google;
    const mapStyles = {
      position: "relative",
      width: "100%",
      height: "calc(100vh - 60px)",
    };
    return (
      <div>
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
              <a id="subwaybtn" onClick={this.submit}>
                지하철
              </a>

              {/* <button onClick={Map.submit}>지하철</button> */}
            </li>
          </ul>
        </div>
        <div>
          <Map
            google={googleMap}
            zoom={12}
            style={mapStyles}
            initialCenter={{ lat: newCenterLat, lng: newCenterLng }}
            onClick={this.onMapClicked}
            streetViewControl={true}
            fullscreenControl={false}
            scaleControl={true}
            mapTypeControl={true}
            mapTypeControlOptions={{
              style: googleMap.maps.MapTypeControlStyle.HORIZONTAL_BAR,
              position: googleMap.maps.ControlPosition.TOP_RIGHT,
            }}
          >
            {this.displayMarkers()}
            {this.displayInfoWindows()}
            {this.displaySubwayMarkers()}
          </Map>
        </div>
      </div>
    );
  }
}

const LoadingContainer = props => <div>Loading MapData!</div>;

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  language: "ko",
  LoadingContainer: LoadingContainer,
})(MapInfo);
