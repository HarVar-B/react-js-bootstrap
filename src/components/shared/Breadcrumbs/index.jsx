import React                from "react";
import { Link, withRouter } from "react-router-dom";
import BC                   from "@mui/material/Breadcrumbs";
import styled               from "styled-components";
import { connect }          from "react-redux";

const SLink = styled(Link)`
  text-decoration: none;
  font-size: 18px;
  color: rgba(1, 1, 1, 0.7);

  :hover {
    text-decoration: underline;
    color: rgb(1, 1, 1);
  }
`;
const Breadcrumbs = ({ location, metricEntries, entry }) => {
  const mapRouteToDisplayLabel = {
    "metric-entries": (id) => metricEntries?.find(_ => _.id == id)?.name || entry?.name || ""
  };

  const crumbs = () => {
    const parts = location.pathname.split("/");
    parts.shift();
    const links = parts.reduce((acc, _, i) => {
      return [...acc,
        {
          link: (acc.length ? acc[acc.length - 1].link : "") + "/" + _,
          label: mapRouteToDisplayLabel[parts[i - 1]] ? mapRouteToDisplayLabel[parts[i - 1]](_) : _
        }
      ];
    }, []);
    return links.map((_,i) => <SLink key={i} to={_.link}>{_.label}</SLink>);
  };
  return <BC aria-label="breadcrumb" style={{
    margin: "0 0 0 0",
    background: "#F5F7FB",
    paddingTop: "5px",
    paddingLeft: "10px",
    height: "30px"
  }}>
    <SLink to={"/"}>Home</SLink>
    {crumbs()}
  </BC>;
};
const mapStateToProps = state => ({
  metricEntries: [{name:"dummy name - 0"},{name:"dummy name - 1"}],
  entry: {name:"dummy name"}
});
export default connect(mapStateToProps)(withRouter(Breadcrumbs));
