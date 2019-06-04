import React from "react";
import "./App.css";
import Parent_fetcher from "./components/rs3/parent_fetcher";
import Parent_fetcher_osrs from "./components/osrs/parent_fetcher_osrs";
import { BrowserRouter as Router, Route  } from 'react-router-dom';
export default function App() {

  return (
    <React.Fragment>
    <Router>
    <div className="App">
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
      <Route exact path="/" render={props => (
      <React.Fragment>
      
      <Parent_fetcher />

      </React.Fragment>
)} />
<Route path="/OSRS" render={props => (
      <React.Fragment>
      
      <Parent_fetcher_osrs />

      </React.Fragment>
)} />
    </div>
    </Router>
  </React.Fragment>
  );
}
