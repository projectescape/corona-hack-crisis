import React, { useReducer } from "react";
import axios from "axios";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "fetchProfile":
      return { ...state, profile: action.payload };
    case "fetchPatient":
      return { ...state, patient: action.payload };
    default:
      return state;
  }
};
export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    profile: null,
    patient: null,
  });

  const fetchProfile = async () => {
    const profile = await axios.get("/api/current_user");
    dispatch({ type: "fetchProfile", payload: profile.data });
  };

  const fetchPatient = async () => {
    const patient = await axios.get("/api/patient");
    dispatch({ type: "fetchPatient", payload: patient.data });
  };

  return (
    <Context.Provider value={{ ...state, fetchProfile, fetchPatient }}>
      {children}
    </Context.Provider>
  );
};

export default Context;
