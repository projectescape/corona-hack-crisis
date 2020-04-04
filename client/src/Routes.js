import React, { useContext } from "react";
import ContactDetail from "./components/ContactDetect";
import Advisories from "./components/Advisories";
import FollowUp from "./components/FollowUp";
import TestingEligibility from "./components/TestingEligibility";
import { Switch, Route, Redirect } from "react-router-dom";
import Context from "./context";
import Login from "./components/Login";
import HandleLogin from "./components/HandleLogin";

const Routes = () => {
  const { profile } = useContext(Context);

  return (
    <Switch>
      {profile === null ? (
        <>
          <Route path="/handleLogin" component={HandleLogin} />
          <Route path="/" component={Login} />
        </>
      ) : null}
      <Route path="/adv" component={Advisories} />
      <Route path="/checkContact" component={ContactDetail} />
      <Route path="/testingEligibility" component={TestingEligibility} />
      <Route path="/followUp" component={FollowUp} />
      <Advisories />
    </Switch>
  );
};

export default Routes;
