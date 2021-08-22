import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx.js";
import MarkerCluster from "./Cluster";
import "./Map.css";

// const HOME_PATH = window.HOME_PATH || ".";
var places = [];
var newCenterLng, newCenterLat; // 매물들의 좌표 중앙값 구하기
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
            type="button"
            onClick={() => {
              this.props.sideBarOn(this.state.selectedPlace);
            }}
          >
            Show details
          </button>
        </div>
      </InfoWindowEx>
    );
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
        </Map>
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
