import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled.span`
  display: flex;
  color: #e1e9fc !important;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  list-style: none;
  height: 50px;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;

  &:hover {
    background: #252831;
    border-left: 4px solid #632ce4;
    cursor: pointer;
    transition: 0.5s ease-out;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  /* background: blue; */
  height: 40px;
  /* width: 320px; */
  width: "100%";
  margin-bottom: 5px;
  border-radius: 20px;
  padding-left: 3rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  /* border: 1px #fff solid; */
  font-size: 15px;
  z-index: -999;
  &:hover {
    background: #064757;
    cursor: pointer;
    transition: 0.5s ease-in-out;
  }
`;

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink onClick={item.subNav && showSubnav}>
        <div>
          {/*item.icon*/}
          <SidebarLabel showSidebar={showSidebar}>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index} onClick={showSidebar}>
              {/*item.icon*/}
              <SidebarLabel>{item.title}</SidebarLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
