import Layout from "components/layout/Layout";
import React from "react";
import VehicleList from "components/vehicles/List";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Layout>
      <VehicleList />
    </Layout>
  );
}

export default App;
