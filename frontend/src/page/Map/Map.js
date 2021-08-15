import { Component } from "react";
import { NaverMap, RenderAfterNavermapsLoaded, Marker } from "react-naver-maps";
import "./Map.css";

const HOME_PATH = window.HOME_PATH || ".";

class Map extends Component {
  constructor(props) {
    super(props);

    const navermaps = window.naver.maps;

    this.state = {
      center: { lat: 37.3595704, lng: 127.105399 },
    };

    // this.toggleInteraction = this.toggleInteraction.bind(this);
    this.toggleControl = this.toggleControl.bind(this);

    this.panToNaver = this.panToNaver.bind(this);
  }
  panToNaver() {
    this.setState({ center: { lat: 37.3595704, lng: 127.105399 } });
  }
  toggleControl() {
    if (this.state.scaleControl) {
      this.setState({
        scaleControl: false,
        logoControl: false,
        mapDataControl: false,
        zoomControl: false,
        mapTypeControl: false,
      });
    } else {
      this.setState({
        scaleControl: true,
        logoControl: true,
        mapDataControl: true,
        zoomControl: true,
        mapTypeControl: true,
      });
    }
  }
  render() {
    const navermaps = window.naver.maps;
    return (
      <div>
        <NaverMap
          id="maps-getting-started-controlled"
          style={{ width: "100%", height: "calc(100vh - 140px)" }}
          defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)} //지도의 초기 중심 좌표
          defaultZoom={16}
          // {...this.state}

          zoomControl={true} // 지도 축척 컨트롤의 표시 여부입니다.
          zoomControlOptions={{
            style: navermaps.ZoomControlStyle.SMALL,
            position: navermaps.Position.RIGHT_BOTTOM,
          }}
          scaleControl={true}
          scaleControlOptions={{
            position: navermaps.Position.RIGHT_BOTTOM,
          }}
          logoControl={true} // NAVER 로고 컨트롤의 표시 여부입니다. (항상 노출로 변경됨)
          logoControlOptions={{
            position: navermaps.Position.LEFT_BOTTOM,
          }}
          mapTypeControl={true} // 지도 유형 컨트롤의 표시 여부입니다.
          mapTypeControlOptions={{
            style: navermaps.MapTypeControlStyle.BUTTON,
            position: navermaps.Position.TOP_RIGHT,
          }}
          mapDataControl={false} // 지도 데이터 저작권 컨트롤의 표시 여부입니다.
        >
          {/* <Buttons>
            <ControlBtn
              controlOn={this.state.scaleControl}
              onClick={this.toggleControl}
            >
              모든 지도 컨트롤
            </ControlBtn>
          </Buttons> */}
          <Marker
            position={new navermaps.LatLng(37.3595704, 127.105399)}
            animation={navermaps.Animation.BOUNCE}
            icon={
              (navermaps.ImageIcon = {
                url: HOME_PATH + "/logo192.png",
                size: new navermaps.Size(192, 192),
                origin: new navermaps.Point(0, 0),
                anchor: new navermaps.Point(0, 0),
              })
            }
            title="매물1"
            onClick={() => {
              alert("여기는 네이버 입니다.");
            }}
          ></Marker>
        </NaverMap>
      </div>
    );
  }
}

function ControlBtn({ controlOn = false, ...restProps }) {
  let style = {
    color: "#555",
    padding: "2px 6px",
    background: "#fff",
    border: "solid 1px #333",
    cursor: "pointer",
    borderRadius: "5px",
    outline: "0 none",
    boxShadow: "2px 2px 1px 1px rgba(0, 0, 0, 0.5)",
    fontSize: "14px",
    margin: "0 5px 5px 0",
  };

  if (controlOn) {
    style = {
      ...style,
      background: "#2780E3",
      color: "#FFF",
    };
  }

  return <button style={style} {...restProps} />;
}

/**
 * Buttons
 * 예시에서는 생략되어있다. .buttons 에 해당한다.
 */
function Buttons(props) {
  return (
    <div
      style={{
        zIndex: 1000,
        position: "absolute",
        display: "inline-block",
      }}
      {...props}
    />
  );
}

<RenderAfterNavermapsLoaded
  clientId={"drgyzrzre5"}
  // Naver Cloud Platform 유저의 경우 props.clientId 대신 props.ncpClientId를 사용합니다.
  // ncpClientId={YOUR_NCP_CLIENT_ID}
  error={<p>Maps Load Error</p>}
  loading={<p>Maps Loading...</p>}
>
  <Map />
</RenderAfterNavermapsLoaded>;

export default Map;