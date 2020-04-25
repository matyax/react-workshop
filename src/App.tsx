import Layout from "components/layout/Layout";
import React from "react";
import VehicleList from "components/containers/VehicleList";
import BookVehicle from "components/containers/BookVehicle";
import BookingSuccess from "components/containers/BookingSuccess";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact component={VehicleList} />
          <Route path="/reservar/:id" exact component={BookVehicle} />
          <Route path="/felicitaciones" exact component={BookingSuccess} />
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
