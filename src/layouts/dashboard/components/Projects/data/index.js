/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Tooltip from "@mui/material/Tooltip";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDProgress from "components/MDProgress";

// Images
import logoXD from "assets/images/small-logos/logo-xd.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoJira from "assets/images/small-logos/logo-jira.svg";
import logoInvesion from "assets/images/small-logos/logo-invision.svg";
import team1 from "assets/images/team-1.jpg";
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";

export default function data() {


  const Company = ({ image, name }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1} width={"100%"}>
      <MDAvatar src={image} name={name} size="lg" />
      <MDTypography variant="button" fontWeight="medium" ml={1} lineHeight={1}>
        {name}
      </MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Ambassador Name", accessor: "companies", width: "70%", align: "left" },
      { Header: "Registrations", accessor: "members", width: "10%", align: "left" },
      { Header: "No of Registrations", accessor: "budget", align: "center" },
      { Header: "Eligibility", accessor: "completion", align: "center" },
    ],

    rows: [
      {
        companies: <Company  name="John Smith" />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              ...
            </MDTypography>
          </MDBox>
        ),
       budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company  name="John Smith" />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              ...
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company  name="John Smith" />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              ...
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company  name="John Smith" />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              ...
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        ),
      },
      {
        companies: <Company  name="John Smith" />,
        members: (
          <MDBox display="flex" py={1}>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              John Doe,
            </MDTypography>
            <MDTypography variant="caption" color="text" fontWeight="medium">
              ...
            </MDTypography>
          </MDBox>
        ),
        budget: (
          <MDTypography variant="caption" color="text" fontWeight="medium">
            20
          </MDTypography>
        ),
        completion: (
          <MDBox width="8rem" textAlign="left">
            <MDProgress value={60} color="info" variant="gradient" label={false} />
          </MDBox>
        )
      }
    ],
  };
}
