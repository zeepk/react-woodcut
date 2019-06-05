import React from "react";
import "./App.css";
import ParentFetcher from "./components/rs3/Rs3ParentFetcher";
import ParentFetcherOsrs from "./components/osrs/OsrsParentFetcher";
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
      
      <ParentFetcher />

      </React.Fragment>
)} />
<Route path="/OSRS" render={props => (
      <React.Fragment>
      
      <ParentFetcherOsrs />

      </React.Fragment>
)} />
    </div>
    </Router>
  </React.Fragment>
  );
}
