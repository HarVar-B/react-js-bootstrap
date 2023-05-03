import React       from "react";
import Breadcrumbs from "../../components/shared/Breadcrumbs";
import Header      from "../header";
import Sidebar     from "../sidebar";
import styled      from "styled-components";

const Layout = styled.div`
  display: flex;
  flex-direction: row;
`;
const SecondDiv = styled.div`
  width: calc(100% - 200px);
  height: 100vh;
  //overflow-x: scroll;

`;
const MainContainer = styled.div`
  height: calc(100vh - 90px);
  overflow-x: scroll;
  margin: 0 0 0 0;
  background: #F5F7FB;
`;

const DefaultLayout = ({ children }) => {
  return (
    <Layout>
      <Sidebar />
      <SecondDiv>
        <Header />
        <Breadcrumbs />
        <MainContainer>{children}</MainContainer>
      </SecondDiv>
    </Layout>
  );
};

export default DefaultLayout;
