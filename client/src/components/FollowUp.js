import React, { useState } from "react";

import axios from "axios";
import { useHistory } from "react-router-dom";
const FollowUp = () => {
  const [details, setDetails] = useState({
    fever: false,
    breath: false,
    cough: false,
    nose: false,
    temp: false,
    // contact and abroad
    contactWithPatient: false,
    abroad: false,
  });

  const history = useHistory();
  const handleSubmit = () => {
    axios.post("/api/userFollow", details);
    history.push("/");
  };

  return (
    <div id="content" className="p-4 p-md-5 pt-5">
      <h3 className="mb-4" style={{ color: "#6E7AFA", textAlign: "center" }}>
        Follow Up
      </h3>
      <p style={{ fontWeight: "bold", color: "black" }}>
        Submit the follow up form below:{" "}
      </p>

      <form id="testingEligibilityForm">
        <p>Symptoms:</p>

        <input
          type="number"
          id="temp"
          name="temp"
          className="formFields"
          style={{ width: "180px" }}
          placeholder="Temperature in &#8457"
          value={details.temp}
          onChange={(e) => {
            setDetails({ ...details, temp: e.target.value });
          }}
        />
        <br />

        <label className="container">
          Fever
          <input
            type="checkbox"
            checked={details.fever}
            onClick={({ target }) => {
              setDetails({ ...details, fever: target.checked });
            }}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Running Nose
          <input
            type="checkbox"
            checked={details.nose}
            onClick={({ target }) => {
              setDetails({ ...details, nose: target.checked });
            }}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Cough
          <input
            type="checkbox"
            checked={details.cough}
            onClick={({ target }) => {
              setDetails({ ...details, cough: target.checked });
            }}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Have you travelled abroad recently?
          <input
            type="checkbox"
            checked={details.abroad}
            onClick={({ target }) => {
              setDetails({ ...details, abroad: target.checked });
            }}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Have you come in contact with any patient?
          <input
            type="checkbox"
            checked={details.contactWithPatient}
            onClick={({ target }) => {
              setDetails({ ...details, contactWithPatient: target.checked });
            }}
          />
          <span className="checkmark"></span>
        </label>
      </form>
      <div className="newButton" style={{ align: "center" }}>
        <button
          type="button"
          className="btn btn-light buttonMy"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default FollowUp;
