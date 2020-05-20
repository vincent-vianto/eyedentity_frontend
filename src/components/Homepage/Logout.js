import React from "react";
import { logout } from "../../actioncreators/login";
import { connect } from "react-redux";

const Logout = (props) => {
  const onChange = () => {
    props.logout();
  };
  return (
    <div className="nav-link" onClick={onChange}>
      Logout
    </div>
  );
};

const mapDispatchToProps = {
  logout: logout,
};

export default connect(null, mapDispatchToProps)(Logout);
