import React, { useEffect } from "react";
import { styled } from "@mui/system";
import { connect } from "react-redux";
import Sidebar from "./sidebar/Sidebar";
import FriendsSideBar from "./friendssidebar/FriendsSideBar";
import Messenger from "./messenger/Messenger";
import AppBar from "./appbar/AppBar";
import { logout } from "../../utils/auth";
import { getActions } from "../../store/actions/authActions";

const Wrapper = styled("div")({
  width: "100%",
  height: "100vh",
  display: "flex",
});

const Dashboard = ({ setUserDetails }) => {
  useEffect(() => {
    const userDetails = localStorage.getItem("user");
    if (!userDetails) {
      logout();
    } else {
      setUserDetails(JSON.parse(userDetails));
    }
  }, []);

  return (
    <Wrapper>
      <Sidebar />
      <FriendsSideBar />
      <Messenger />
      <AppBar />
    </Wrapper>
  );
};

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(null, mapActionsToProps)(Dashboard);
