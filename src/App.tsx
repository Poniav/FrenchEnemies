import React from "react";
import Router from "./router";
import { EnemyContextProvider } from "./hooks/EnemyContext";

function App() {
  return (
    <EnemyContextProvider>
      <Router />
    </EnemyContextProvider>
  );
}

export default App;
