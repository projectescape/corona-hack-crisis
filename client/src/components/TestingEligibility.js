import React, { useState, useContext } from "react";
import Context from "../context";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Test = () => {
  const [details, setDetails] = useState({
    name: "",
    age: null,
    sex: true,
    address: "",
    city: "",
    state: "",
    pincode: null,
    // Symptoms
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

  const { setMessage } = useContext(Context);

  const history = useHistory();
  const handleSubmit = () => {
    axios.post("/api/userEligibility", details);
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
        Testing Eligibility
      </h3>
      <p style={{ fontWeight: "bold", color: "black" }}>
        Submit the form below to check if you are eligible for COVID-19 testing:
      </p>
      <form id="testingEligibilityForm">
        <p>Personal Info:</p>
        <input
          type="text"
          id="fname"
          name="fname"
          className="formFields"
          placeholder="Full Name"
          value={details.name}
          onChange={(e) => {
            setDetails({ ...details, name: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          id="Age"
          name="lname"
          className="formFields"
          placeholder="Age"
          style={{ width: "85px" }}
          value={details.age}
          onChange={(e) => {
            setDetails({ ...details, age: e.target.value });
          }}
        />
        &nbsp; &nbsp; &nbsp; &nbsp;
        <select
          id="cars"
          name="cars"
          value={details.sex ? "male" : "female"}
          onChange={(e) => {
            setDetails({
              ...details,
              sex: e.target.value === "male" ? true : false,
            });
          }}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <br />
        <input
          type="email"
          id="emailid"
          name="emailid"
          className="formFields"
          placeholder="Email"
          value={details.email}
          onChange={(e) => {
            setDetails({ ...details, email: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          id="address"
          name="address"
          className="formFields"
          placeholder="Address"
          value={details.address}
          onChange={(e) => {
            setDetails({ ...details, address: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          id="city"
          name="city"
          className="formFields"
          placeholder="City"
          value={details.city}
          onChange={(e) => {
            setDetails({ ...details, city: e.target.value });
          }}
        />
        <br />
        <input
          type="text"
          id="state"
          name="state"
          className="formFields"
          placeholder="State"
          value={details.state}
          onChange={(e) => {
            setDetails({ ...details, state: e.target.value });
          }}
        />
        <br />
        <input
          type="number"
          id="pincode"
          name="pincode"
          className="formFields"
          placeholder="Pincode"
          value={details.pincode}
          onChange={(e) => {
            setDetails({ ...details, pincode: e.target.value });
          }}
        />
        <br />
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
      <br />

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

export default Test;
