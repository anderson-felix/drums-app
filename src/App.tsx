import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import FormLogin from "./pages/FormLogin";
import HeaderLogo from "./components/Logo";

function Home() {
  return (
    <div>
      <div className="row flex-1">
        <div className="col">
          <HeaderLogo />
        </div>

        <div className="col-sm-6 col-md-4">
          <FormLogin />
        </div>
      </div>
    </div>
  );
}

function button() {
  return <button>Hello react</button>;
}

export default Home;
