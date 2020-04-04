import React, { useReducer } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchProfile":
      return { ...state, profile: action.payload };
    case "fetchPatient":
      return { ...state, patient: action.payload };
    case "fetchAdvisory":
      return { ...state, advisory: action.payload };
    case "setMessage":
      return { ...state, message: action.payload };
    default:
      return state;
  }
};
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    profile: null,
    patient: null,
    advisory: null,
    message: "",
  });

  const fetchProfile = async () => {
    const profile = await axios.get("/api/current_user");
    dispatch({ type: "fetchProfile", payload: profile.data });
  };

  const fetchPatient = async () => {
    const patient = await axios.get("/api/patient");
    dispatch({ type: "fetchPatient", payload: patient.data });
  };
  const fetchAdvisory = async () => {
    const advisory = await axios.get("/api/advisory");
    dispatch({ type: "fetchAdvisory", payload: advisory.data });
  };
  const submitPatient = (list) => {
    axios.post(
      "/api/userpatient",
      Object.keys(list).map((e) => parseInt(e))
    );
  };
  const setMessage = (message) => {
    dispatch({ type: "setMessage", payload: message });
  };

  return (
    <Context.Provider
      value={{
        ...state,
        fetchProfile,
        fetchPatient,
        fetchAdvisory,
        submitPatient,
        setMessage,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default Context;
