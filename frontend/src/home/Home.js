import React, { useState, Component } from "react";
import { Input, Space } from "antd";
import SearchOutlined from "@ant-design/icons/SearchOutlined";
import "./Home.css";
import styled from "styled-components";

const { Search } = Input;

const StyledInput = styled(Input)`
  margin-top: 1rem;
`;

const onSearch = value => console.log(value);
const keyword = "";
const setKeyword = "";
const handleEnter = (e: React.KeyboardEvent) => {
  if (e.key === "Enter") {
    this.props.history.push(`/search?keyword=${keyword}`);
  }
};
class Home extends Component {
  render() {
    return (
      <div className="home-container">
        <div className="container">
          <div className="graf-bg-container">
            <div className="graf-layout">
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
              <div className="graf-circle"></div>
            </div>
          </div>
          <h1 className="home-title">Fintech-Hackaton </h1>
          <Space direction="vertical">
            <Search
              placeholder="input search text"
              allowClear
              enterButton="Search"
              size="large"
              onSearch={onSearch}
            />
          </Space>

          <StyledInput
            value={keyword}
            onKeyDown={handleEnter}
            onChange={e => setKeyword(e.target.value)}
            prefix={<SearchOutlined />}
            className="shadow-box"
            style={{
              maxWidth: "300px",
              textAlign: "left",
              borderRadius: "20px",
              padding: "10px 20px",
              border: "none",
            }}
            size="large"
            placeholder="Keyword"
            allowClear
          />
        </div>
      </div>
    );
  }
}

export default Home;
