import axios from "axios";
import { useEffect, useState } from "react"; 
import "./App.css";
import Navbar from "./components/layout/Navbar";
// import Users from "./components/users/User"; 
import Search from "./components/users/Search";

const App = () => {
  return (
  <div className="App">
  <Router>
  <Navbar />
  <div className="container">
  <h1>GitHub Users Data</h1>
  <Switch>
  <Route exact path="/" component={Search} />
  </Switch>
  </div>
  </Router>
  </div>
  );
 };
 export default App;