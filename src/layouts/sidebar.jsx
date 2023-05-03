import React, { useMemo }   from "react";
import { Link, withRouter } from "react-router-dom";
import styled               from "styled-components";

import Logo         from "../assets/brand/logo.svg";
import ActiveItem   from "../assets/active-list-item.svg";
import InActiveItem from "../assets/inactive-list-item.svg";
import routes       from "../routes";

const SideNav = styled.div`
  //position: fixed;
  //top: 0;
  //left: 0;
  height: 100vh;
  width: 200px;
  //z-index: 1;
  background-color: #121213;
  //overflow-x: hidden;
`;
const LogoStyle = styled.img`
  display: block;
  margin: 19px auto 30px auto;
`;
const ListItems = styled.ul`
  color: white;
`;
const LinkTag = styled(Link)`
  text-decoration: none;
  margin: 2px 0 2px 0;
  display: flex;
  align-items: center;
  height: 50px;
  background: #1B1B1D;
  padding-left: 20px;
  cursor: pointer;
  color: white;

  ${p => p.isactive && `
    color: #FFCA20;
    border-left: 2px solid #FFCA20;
    padding-left: 18px !important;
  `}
  :hover {
    color: #FFCA20;
    padding-left: 18px !important;
  }
`;

const Ml10 = styled.div`
  margin-left: 10px;
  text-decoration: none;

`;

// Items on the side bar.
const items = [
  {
      title: 'Home', // To be Shown on the UI
      id: 'home',
      url: '/' // url to which it corresponds to OR value to which the active tab is passed from Layout
  },
];

const SideBar = ({ location }) => {
  const activeTab = useMemo(() => location.pathname.split("/")[1], [location.pathname]);
  return (
    <SideNav>
      <LogoStyle src={Logo} width="58px" height="32px" alt="Rapido Logo" />
      <ListItems>
        {items.map((item) => (
          <li key={item.id} href={item.url}>
            <LinkTag to={item.url} isactive={item.id === activeTab}>
              {item.id === activeTab
                ? (<img src={ActiveItem} height="20px" width="20px"
                        alt="list-item" />)
                : (<img src={InActiveItem} height="20px" width="20px"
                        alt="list-item" />)}
              <Ml10>{item.title}</Ml10>
            </LinkTag>
          </li>
        ))}
      </ListItems>
    </SideNav>
  );
};

export default withRouter(SideBar);
