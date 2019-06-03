import React from "react";
import "./App.css";
import Parent_fetcher from "./components/parent_fetcher";
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
