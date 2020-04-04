import React, { useContext, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Context from "../context";

const HandleLogin = () => {
  const { profile, fetchProfile } = useContext(Context);

  useEffect(() => {
    fetchProfile();
  }, []);

  return profile === null ? <div>Handling login</div> : <Redirect to="/adv" />;
};

export default HandleLogin;
