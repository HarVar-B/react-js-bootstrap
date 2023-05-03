import React, { useCallback, useState } from "react";
import { connect }                      from "react-redux";
import styled                           from "styled-components";

import UserIcon                from "../assets/userIcon.svg";
import {AbsolutelyPlacedBox} from "../pages/commonStyles";
import { userProfileData }     from "../redux/modules/session/selector";
import * as sessionActions     from "../redux/modules/session/creator";

const HeaderContainer = styled.div`
  //position: fixed;
  //top: 0;
  //left: 200px;
  height: 60px;
  //z-index: 1;
  background-color: white;
  border-bottom: 1px solid #eaeaea;
`;
const Option = styled.div`
  padding: 3px 5px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 0.5rem;
  margin: 1px 0;
  width: 120px;

  :hover,
  :active,
  :focus,
  :focus-visible {
    background-color: #ffca2020;
  }
`;
const UserBox = styled.div`
  width: fit-content;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  float: right;
  outline: none;
  position: relative;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
const UserInfo = styled.div`
  max-width: 150px;
  margin-right: 30px;
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
`;
const UserName = styled.div`
  /* font-family: Source Sans Pro; */
  font-size: 15px;
  line-height: 15px;
  color: #495057;
`;
const ImgStyle = styled.img`
  border-radius: 50%;
  margin: 0 8px;
`;

const HeaderComponent = ({ user, userLogout }) => {
  const handleLogout = () => {
    userLogout();
  };
  const [isOpen, setIsOpen] = useState(false);
  const imageUrl = user?.user?.picture || UserIcon;
  const name = user.firstName + " " + user.lastName;
  // const role = user?.roles?.join(", ") || "User Role";

  const toggleIsOpen = useCallback(() => setIsOpen(!isOpen), [isOpen]);
  return (
    <HeaderContainer>
      <UserBox role="button" tabIndex={0} onClick={toggleIsOpen}>
        <div>
          <ImgStyle src={imageUrl} height="32px" width="32px" alt="user" />
        </div>
        <UserInfo>
          <UserName data-testid="name">{name}</UserName>
          {/*<UserRole title={role}>*/}
          {/*  <div data-testid="role">{role}</div>*/}
          {/*</UserRole>*/}
        </UserInfo>
        {isOpen ?
          <AbsolutelyPlacedBox style={{ top: 60, left: 0 }}>
            <Option onClick={handleLogout}>Logout</Option>
          </AbsolutelyPlacedBox>
          : null}
      </UserBox>

    </HeaderContainer>
  );
};
const mapStateToProps = (state) => ({
  user: userProfileData(state)
});
const mapActionToProps = {
  userLogout: sessionActions.userLogout
};
export default connect(mapStateToProps, mapActionToProps)(HeaderComponent);
