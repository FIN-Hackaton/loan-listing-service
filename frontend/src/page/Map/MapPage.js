import React, { Component } from "react";
import Map from "./Map.js";

function MapPage() {
  return (
    <div className="MapPage">
      <div className="filter_wrap">
        <div className="filter_area filter_area--apart">
          <h4 className="blind">아파트,오피스텔 필터</h4>
          <button
            type="button"
            class="filter_type"
            name="realEstate_type"
            id="type0"
            value="APT"
            aria-pressed="true"
            data-nclk="FAA.apt"
          >
            아파트
          </button>
          <button
            type="button"
            class="filter_type"
            name="realEstate_type"
            id="type1"
            value="OPST"
            aria-pressed="false"
            data-nclk="FAA.officetel"
          >
            오피스텔
          </button>
          <button
            type="button"
            class="filter_type"
            name="realEstate_type"
            id="type2"
            value="OPST"
            aria-pressed="false"
            data-nclk="FAA.officetel"
          >
            빌라
          </button>
          <button
            type="button"
            class="filter_type"
            name="realEstate_type"
            id="type3"
            value="OPST"
            aria-pressed="false"
            data-nclk="FAA.officetel"
          >
            주택
          </button>
          <button
            type="button"
            class="filter_type"
            name="realEstate_type"
            id="type0"
            value="ONEROOM"
            aria-pressed="true"
            data-nclk="FAA.oneroom"
          >
            {" "}
            원룸
          </button>
          <button
            type="button"
            class="filter_type"
            name="realEstate_type"
            id="type1"
            value="TWOROOM"
            aria-pressed="true"
            data-nclk="FAA.tworoom"
          >
            {" "}
            투룸
          </button>
          <div
            class="filter_group filter_group--deal is-active "
            id="trade_type_filter"
          >
            <div class="filter_inner">
              <a
                href="javascript:void(0);"
                role="button"
                class="filter_btn_select"
                aria-haspopup="true"
                aria-expanded="false"
                aria-pressed="false"
              >
                전세
                <i class="icon icon_arrow_down_bold2" aria-hidden="true"></i>
              </a>
              <div class="filter_popup filter_popup--deal" aria-hidden="true">
                <div>
                  <h4 class="title">거래방식</h4>
                  <ul class="select_list_wrap" aria-describedby="notice2">
                    <li class="select_item">
                      <input
                        type="checkbox"
                        name="deal"
                        id="deal0"
                        class="checkbox_input"
                        data-nclk="FAO.tall"
                        value="ALL"
                      ></input>
                      <label for="deal0" class="checkbox_label">
                        전체
                      </label>
                    </li>
                    <li class="select_item">
                      <input
                        type="checkbox"
                        name="deal"
                        id="deal1"
                        class="checkbox_input"
                        data-nclk="FAO.sale"
                        value="A1"
                      ></input>
                      <label for="deal1" class="checkbox_label">
                        매매
                      </label>
                    </li>

                    <li class="select_item">
                      <input
                        type="checkbox"
                        name="deal"
                        id="deal2"
                        class="checkbox_input"
                        data-nclk="FAO.rent"
                        value="B1"
                      ></input>
                      <label for="deal2" class="checkbox_label">
                        전세
                      </label>
                    </li>
                    <li class="select_item">
                      <input
                        type="checkbox"
                        name="deal"
                        id="deal3"
                        class="checkbox_input"
                        data-nclk="FAO.monthly"
                        value="B2"
                      ></input>
                      <label for="deal3" class="checkbox_label">
                        월세
                      </label>
                    </li>
                    <li class="select_item">
                      <input
                        type="checkbox"
                        name="deal"
                        id="deal4"
                        class="checkbox_input"
                        data-nclk="FAO.smonthly"
                        value="B3"
                      ></input>
                      <label for="deal4" class="checkbox_label">
                        단기임대
                      </label>
                    </li>
                  </ul>
                  <p class="notice" id="notice1">
                    <i class="icon icon_alert_small" aria-hidden="true"></i>
                    중복선택이 가능합니다.
                  </p>
                  <button
                    type="button"
                    class="btn_close"
                    aria-label="팝업 닫기"
                  >
                    <i class="icon icon_close" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="filter_balloon_popup" aria-hidden="true">
                거래방식 : 전세
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="map_wrap">
        <div class="panel_group--upper">
          <div class="list_panel" id="complexOverviewList">
            <div id="land_panel_da" class="banner type_performance"></div>
          </div>
        </div>
        <div class="map_panel" id="map">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default MapPage;
