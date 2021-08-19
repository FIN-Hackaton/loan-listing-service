import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx.js";
import "./Map.css";

const HOME_PATH = window.HOME_PATH || ".";
const places = [];
const sample_places = [
  {
    name: "네이버",
    title: "네이버",
    lat: 37.3595704,
    lng: 127.105399,
    id: 1,
  },
  {
    name: "카카오 판교",
    title: "카카오 판교",
    lat: 37.4020589,
    lng: 127.1067883,
    id: 2,
  },
  {
    name: "라인플러스",
    title: "라인플러스",
    lat: 37.385324,
    lng: 127.1209902,
    id: 3,
  },
];

class MapInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docked: false,
      stores: [],
      center: { lat: 37.3595704, lng: 127.105399 },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
    // console.log(this.props);
    // DB로부터 받은 매물 정보 사용가능하게 변환
    const placeLists = this.props.places.lists;
    for (var key in placeLists) {
      places.push(placeLists[key]);
    }
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.place_,
      activeMarker: marker,
      showingInfoWindow: true,
    });
    this.props.ifOffSidebar(this.state.selectedPlace); // 사이드바가 닫혀있을 때 마커를 클릭했을 때 장소정보만 전달sidebar...
  };

  showDetails = place => {
    console.log(place);
  };

  onEventChecker = (e, aug, geo) => {
    console.log(e);
    console.log(aug);
    console.log(geo);
  };

  displayMarkers = () => {
    // console.log(places);
    return places.map((place, i) => {
      return (
        <Marker
          key={place.id}
          position={{ lat: place.lat, lng: place.lng }}
          label={place.name}
          place_={place}
          animation={0} // {BOUNCE: 1, DROP: 2, Lq: 3, Iq: 4}
          onClick={this.onMarkerClick}
        />
      );
    });
  };

  removeMarkerInfos = () => {
    this.setState({
      showingInfoWindow: false,
    });
    this.props.sideBarOff();
  };

  displayInfoWindows = () => {
    return (
      <InfoWindowEx
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        <div>
          <h3>{this.state.selectedPlace.name}</h3>
          <p>정보1</p>
          <p>정보2</p>
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
    // console.log(googleMap);
    return (
      <Map
        google={googleMap}
        zoom={12}
        style={mapStyles}
        initialCenter={this.state.center}
        onClick={this.removeMarkerInfos}
        streetViewControl={false}
        fullscreenControl={false}
        scaleControl={true}
        mapTypeControlOptions={{
          style: googleMap.maps.MapTypeControlStyle.HORIZONTAL_BAR,
          position: googleMap.maps.ControlPosition.TOP_RIGHT,
        }}
      >
        {this.displayMarkers()}
        {this.displayInfoWindows()}
      </Map>
    );
  }
}

const LoadingContainer = props => <div>Loading MapData!</div>;

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAP_API,
  language: "ko",
  LoadingContainer: LoadingContainer,
})(MapInfo);
