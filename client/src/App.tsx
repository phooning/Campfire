import React, { ReactElement } from "react";
import NormalizeStyles from "./styles/NormalizeStyles";
import BaseStyles from "./styles/BaseStyles";
import Routes from "./Routes";

function App(): ReactElement {
  return (
    <>
      <NormalizeStyles />
      <BaseStyles />
      <Routes />
    </>
  );
}

export default App;
