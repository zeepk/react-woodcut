import React from "react";
import SearchField from "react-search-field";
import "./App.css";
import Load_data from "./components/load_data";
import NameForm from "./components/NameForm";
import Parent_fetcher from "./components/parent_fetcher";
// import {Parent, Child} from "./components/testing";
import Fetch_stats from "./components/fetch_stats";
export default function App() {

  return (
    <div className="App">
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/darkly/bootstrap.min.css"
      />
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js" />
      
      <Parent_fetcher />

    </div>
  );
}
