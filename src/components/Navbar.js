import React, { Component } from "react";
import axios from "axios";
import Logo from "./Img/logofinal.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import Logout from "./Homepage/Logout";
import img1 from "./Img/img1.jpg";
import "./Navbar.css";
import FilterUser from "./Homepage/FilterUser";



class Navbar extends Component {

  constructor() {
    super();
    this.state = {
      data: {},
    };
  }

  

  componentDidMount() {
    const url = process.env.REACT_APP_API_URL
    const user = JSON.parse(localStorage.getItem("user"));

    axios
      .get(`${url}/users/show/${user.id}`)
      .then((response) => {
        this.setState({ data: response.data });
      });
  }

  render() {
    let user = Object.assign({}, this.state.data);
    const url = process.env.REACT_APP_API_URL
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            padding: "0% 5% 0% 5%"
          }}
        >
          <Link className="navbar-brand" to="/">
            <img src={Logo} width="35px" alt="" />
            <strong> Memoir</strong>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <FilterUser/>
            
            <ul className="navbar-nav ml-auto">
              <li className="nav-item  ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to={`/profile/${user._id}`}>
                  <img
                    src={`${url}/${user.image}`}
                    className="rounded-circle"
                    style={{ width: "25px", height:"25px"}}
                    alt="..."
                  />
                  <b>
                    <span> {user.name}</span>
                  </b>
                </Link>
              </li>
              <li className="nav-item  ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faHome} className="fa-lg mx-auto" />
                  &nbsp;
                   <span className="itemnav">Home</span>
                </Link>
              </li>
              {/* <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Link className="nav-link" to="/friend">
                  <FontAwesomeIcon icon={faUserFriends} className="fa-lg mx-auto" />
                  &nbsp;
                  Friends
                </Link>
              </li> */}

              <li className="nav-item ml-lg-2 ml-md-0 mr-2 mr-md-0">
                <Logout />
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
