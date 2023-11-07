import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Application() {
    return <h1>List movies!</h1>;
}

root.render(<Application/>);