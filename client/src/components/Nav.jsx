import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  const [toggle, fToggle] = useState("inactive");
  return (
    <nav id="sidebar" className={toggle}>
      <div className="custom-menu">
        <button
          type="button"
          id="sidebarCollapse"
          className="btn btn-primary"
          onClick={() => {
            //alert("fghjk");
            if (toggle === "active") fToggle("inactive");
            else fToggle("active");
          }}
        >
          <i className="fa fa-bars"></i>
          <span className="sr-only">Toggle Menu</span>
        </button>
      </div>
      <div className="p-4">
        <h1>
          <a href="index.html" className="logo">
            Flash
          </a>
        </h1>
        <div className="account">
          <div className="account">
            <img
              src="images/contactDetection/adult-beard-boy-220453.png"
              alt="..."
              className="accountImage"
            />
            <span className="fa fa-check-circle mr-3"></span>
            <span className="mr-3 vText">George Smith</span>
          </div>
        </div>
        <ul className="list-unstyled components mb-5 vList">
          <li className="active">
            <Link to="/adv">
              <span className="fa fa-star mr-3"> </span> Advisories
            </Link>
          </li>
          <li>
            <Link to="/checkContact">
              <span className="fa fa-users mr-3"></span> Check Contact
            </Link>
          </li>
          <li>
            <Link to="/testingEligibility">
              <span className="fa fa-medkit mr-3"></span> Testing Eligibility{" "}
            </Link>
          </li>
          <li>
            <Link to="/followUp">
              <span className="fa fa-suitcase mr-3"></span> Follow up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Nav;
