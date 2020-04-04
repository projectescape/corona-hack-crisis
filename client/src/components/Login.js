import React from "react";

const login = () => {
  console.log("Inside login component");
  return (
    <a href="/auth/google">
      <button>Sign in with google</button>
    </a>
  );
};

export default login;
