import React from "react";
import "./App.css";
import ParentFetcher from "./components/rs3/Rs3ParentFetcher";
import ParentFetcherOsrs from "./components/osrs/OsrsParentFetcher";
import Home from './components/home.js'
import Nameform from './components/NameForm';
import Rs3Home from './components/Rs3Home.js';
import OsrsHome from './components/OsrsHome.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      
      
      <Route exact path="/rs3/:id" component={ParentFetcher} />
      <Route exact path="/osrs/:id" component={ParentFetcherOsrs} />
      
      <Route exact path="/" render={props => (
      <React.Fragment>
      <Home />

      </React.Fragment>
)} />
<Route exact path="/osrs" render={props => (
      <React.Fragment>
      
      <OsrsHome />

      </React.Fragment>
)} />
<Route exact path="/rs3" render={props => (
      <React.Fragment>
      
      <Rs3Home />

      </React.Fragment>
)} />
    </div>
    </Router>
  </React.Fragment>
  );
}
