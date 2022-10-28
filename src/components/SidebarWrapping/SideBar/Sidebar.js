import React, { useState } from "react";
import styled from "styled-components/macro";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../../../lib/SidebarData/SidebarData";
import SubMenu from "../SubMenu/SubMenu";
import { IconContext } from "react-icons/lib";
//import "./Sidebar.css";

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavMenuIcon onClick={showSidebar} className="lb_menuBg">
            <div>
              {sidebar ? (
                <FaIcons.FaTimes size={20} />
              ) : (
                <FaIcons.FaBars size={20} />
              )}
            </div>
          </NavMenuIcon>
        </Nav>

        <SidebarNav sidebar={sidebar}>
          <SidebarWrap showSidebar={showSidebar}>
            <span
              onClick={showSidebar}
              style={{
                marginLeft: 20,
                fontSize: 20,
                fontWeight: "700",

                cursor: "pointer",
                fontWeight: "bold",
              }}
              className="center"
            >
              X
            </span>
            {SidebarData.map((item, index) => {
              return (
                <SubMenu item={item} key={index} showSidebar={showSidebar} />
              );
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;

const Nav = styled.div`
  /* background: #064757; */
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavMenuIcon = styled.span`
  margin-left: 2rem;
  font-size: 1rem;
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  // background: linear-gradient(120deg, #064757 20%, #04afda);
  background: #1a237e;
  overflow: scroll;
  zindex: 9999 !important;
  width: 280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  right: ${({ sidebar }) => (sidebar ? "0" : "-100%")};
  transition: 350ms;
  z-index: 999;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;
