import React, { useContext, useEffect } from "react";
import Context from "../context";

const Details = () => {
  const { patient, fetchPatient } = useContext(Context);

  useEffect(() => {
    if (patient === null) fetchPatient();
  }, [patient]);

  const renderCards = () => {
    if (patient === null) return null;
    return patient.map((patient) => {
      return (
        <div className="card" style={{ width: "18rem" }}>
          <div id="cardBody" className="card-body">
            <img
              style={{ float: "left" }}
              className="card-img-top"
              src="images/contactDetection/adult-beard-boy-1.png"
              alt="Card image cap"
            />
            <p className="card-text" style={{ fontSize: "10px" }}>
              <b>{patient.name}</b>
              <br />
              {patient.address}
              <br />
              {patient.city}
              <br />
              {patient.state}
              <br />
              {patient.pincode}
            </p>
            <div className="form-check" style={{ float: "right" }}>
              <input
                className="form-check-input position-static"
                type="checkbox"
                id="blankCheckbox"
                value="option1"
                aria-label="..."
              />
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div id="content" className="p-4 p-md-5 pt-5">
        <h4 className="mb-4" style={{ color: "#6E7AFA", textAlign: "center" }}>
          COVID-19 Contact Detection
        </h4>
        <p style={{ fontWeight: "bold", color: "black" }}>
          Here's a list of people who have tested positive for COVID-19. Please
          select the people who have been in contact with you:
        </p>
        <div className="topnav">
          <input type="text" placeholder="Search by State, Region or Pincode" />
        </div>
        {renderCards()}

        <div className="sticky" style={{ align: "center" }}>
          <button type="button" className="btn btn-light buttonMy">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
