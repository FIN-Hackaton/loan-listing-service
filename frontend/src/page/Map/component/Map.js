import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import InfoWindowEx from "./InfoWindowEx.js";
import "./Map.css";

const HOME_PATH = window.HOME_PATH || ".";

const places = [
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
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props.place_,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };

  showDetails = place => {
    console.log(place);
  };

  onEventChecker = (e, aug, geo) => {
    console.log(e);
    console.log(aug);
    console.log(geo);
  };

  // addMarkers = async (e, aug, geoData) => {
  //   // console.log(aug);
  //   const { stores } = this.state;
  //   let stateData = stores;
  //   let latLng;
  //   latLng = {
  //     latitude: geoData.latLng.lat(),
  //     longitude: geoData.latLng.lng(),
  //   };
  //   stateData.push(latLng);
  //   await this.setState({
  //     stores: stateData,
  //   });
  // };

  displayMarkers = () => {
    // console.log(this.state);
    // console.log(places);
    return places.map((place, i) => {
      return (
        <Marker
          key={place.id}
          position={{ lat: place.lat, lng: place.lng }}
          // label={store.title}
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

  // displayInfoWindows = () => {
  //   return this.state.stores.map((store, index) => {
  //     return (
  //       <InfoWindowEx
  //         key={index}
  //         visible={store.bool}
  //         // position={{ lat: store.latitude, lng: store.longitude }}
  //         content={store.title}
  //         onClose={() => this.visibleInfoWindow(index)}
  //       >
  //         <div className="infowindow_wrap">
  //           <div className="infowindow">
  //             <div id="infoTitle" className="info_title">
  //               <div className="place_name">{index}</div>
  //             </div>
  //             <div className="info_etc">
  //               <p>내용 테스트1</p>
  //               <p>내용 테스트2</p>
  //               {/* <p>{place.vicinity}</p>
  //               <p>⭐{place.rating || "별점없음"}</p> */}
  //             </div>
  //             <button
  //               id="more_detail"
  //               onClick={() => {
  //                 console.log(this.props);
  //                 this.props.sideControl();
  //               }}
  //             >
  //               &#62;
  //             </button>
  //           </div>
  //           <div className="infowindow_anchor"></div>
  //         </div>
  //       </InfoWindowEx>
  //     );
  //   });
  // };

  displayInfoWindows = () => {
    return (
      <InfoWindowEx
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        <div>
          <h3>{this.state.selectedPlace.name}</h3>
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

  // visibleInfoWindow = async i => {
  //   const { stores } = this.state;
  //   let stateData = stores;
  //   stateData[i].bool = !stateData[i].bool;
  //   await this.setState({
  //     stores: stateData,
  //   });
  // };

  render() {
    const googleMap = this.props.google;

    const mapStyles = {
      position: "relative",
      width: "100%",
      height: "calc(100vh - 60px)",
    };
    console.log(googleMap);
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
