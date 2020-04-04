import React, { useState, useContext } from "react";
import Context from "../context";
import axios from "axios";
import { useHistory } from "react-router-dom";
const FollowUp = () => {
  const [details, setDetails] = useState({
    fever: false,
    breath: false,
    dryCough: false,
    wetCough: false,
    nose: false,
    temp: false,
    // contact and abroad
    contactWithPatient: false,
    abroad: false,
  });

  const history = useHistory();
  const { setMessage } = useContext(Context);

  const handleSubmit = () => {
    axios.post("/api/userFollow", details);
    if (details.fever && details.dryCough && details.breath) {
      setMessage(
        "You are eligible for testing and have been added to the testing database"
      );
    } else {
      setMessage(
        "You are not eligible for testing. Please self quarantine until further notice."
      );
    }
    history.push("/message");
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
          placeholder="Temperature in F"
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
          Dry Cough
          <input
            type="checkbox"
            checked={details.dryCough}
            onClick={({ target }) => {
              setDetails({ ...details, dryCough: target.checked });
            }}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Wet Cough
          <input
            type="checkbox"
            checked={details.wetCough}
            onClick={({ target }) => {
              setDetails({ ...details, wetCough: target.checked });
            }}
          />
          <span className="checkmark"></span>
        </label>
        <label className="container">
          Shortness of Breath
          <input
            type="checkbox"
            checked={details.breath}
            onClick={({ target }) => {
              setDetails({ ...details, breath: target.checked });
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
