import React, { useState, useEffect } from "react";
import { Route, Link } from "react-router-dom";
import {
  RenderAfterNavermapsLoaded,
  NaverMap,
  Marker,
  GroundOverlay,
  Polygon,
  Polyline,
  Rectangle,
} from "react-naver-maps"; // 패키지 불러오기
import { withNavermaps } from "react-naver-maps/hocs";

export default function MapPage() {
  const cliendId = "drgyzrzre5";
  return (
    <div>
      <RenderAfterNavermapsLoaded
        ncpClientId={cliendId} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <NaverMapAPI />
      </RenderAfterNavermapsLoaded>
    </div>
  );
}

function NaverMapAPI() {
  const navermaps = window.naver.maps;
  const min = { x: 126.5322317, y: 33.3572421 };
  const max = { x: 126.5364907, y: 33.3608829 };
  const bounds = {
    north: max.y,
    east: max.x,
    south: min.y,
    west: min.x,
  };

  const [mapType, setMapType] = useState("NORMAL");
  const chanegeMepType = e => {
    //e : 이벤트 객체
    setMapType(e.target.type); //이벤트를 받는 타겟의 value값으로 변경
  };
  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width: "100%", // 네이버지도 가로 길이
        height: "85vh", // 네이버지도 세로 길이
      }}
      defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)} // 지도 초기 위치
      defaultZoom={13} // 지도 초기 확대 배율
      //   mapTypeId={mapType}
    >
      <Buttons>
        <ControlBtn
          type="NORMAL"
          controlOn={navermaps.mapTypeId === { mapType }}
          onClick={chanegeMepType}
        >
          일반지도
        </ControlBtn>
        <ControlBtn
          type="TERRAIN"
          //   controlOn={this.state.mapTypeId === navermaps.MapTypeId["TERRAIN"]}
          controlOn={navermaps.mapTypeId === { mapType }}
          onClick={chanegeMepType}
        >
          지형도
        </ControlBtn>
      </Buttons>

      <Marker
        position={new navermaps.LatLng(37.3595704, 127.105399)}
        animation={navermaps.Animation.BOUNCE}
        onClick={() => {
          alert("여기는 네이버 입니다.");
        }}
      />
      <GroundOverlay
        bounds={
          new navermaps.LatLngBounds(
            new navermaps.LatLng(36.634249797, 127.129160067),
            new navermaps.LatLng(36.734249797, 127.410516004)
          )
        }
        url={
          "https://navermaps.github.io/maps.js/docs/img/example/naver-satellite.png"
        }
        clickable={true} // click event를 다루기 위해서는 true로 설정되어야함.
        onClick={() => {
          alert("여기는 한라산 입니다.");
        }}
      />
      <Polygon
        paths={[
          [
            new navermaps.LatLng(37.37544345085402, 127.11224555969238),
            new navermaps.LatLng(37.37230584065902, 127.10791110992432),
            new navermaps.LatLng(37.35975408751081, 127.10795402526855),
            new navermaps.LatLng(37.359924641705476, 127.11576461791992),
            new navermaps.LatLng(37.35931064479073, 127.12211608886719),
            new navermaps.LatLng(37.36043630196386, 127.12293148040771),
            new navermaps.LatLng(37.36354029942161, 127.12310314178465),
            new navermaps.LatLng(37.365211629488016, 127.12456226348876),
            new navermaps.LatLng(37.37544345085402, 127.11224555969238),
          ],
        ]}
        fillColor={"#ff0000"}
        fillOpacity={0.3}
        strokeColor={"#ff0000"}
        strokeOpacity={0.6}
        strokeWeight={3}
      />

      <Polyline
        path={[
          new navermaps.LatLng(37.365620929135716, 127.1036195755005),
          new navermaps.LatLng(37.365620929135716, 127.11353302001953),
          new navermaps.LatLng(37.3606921307849, 127.10452079772949),
          new navermaps.LatLng(37.36821310838941, 127.10814714431763),
          new navermaps.LatLng(37.360760351656545, 127.11299657821654),
          new navermaps.LatLng(37.365620929135716, 127.1036195755005),
        ]}
        // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
        strokeColor={"#5347AA"}
        strokeStyle={"longdash"}
        strokeOpacity={0.5}
        strokeWeight={5}
      />
    </NaverMap>
  );
}
function ControlBtn({ controlOn = false, ...restProps }) {
  let style = {
    margin: 0,
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
