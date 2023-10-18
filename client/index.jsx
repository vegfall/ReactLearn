import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <div>
        <h1>Movie database</h1>
        <ul>
            <li><Link to={"/movies"}>Show movies</Link></li>
            <li><Link to={"/movies/add"}>Add movies</Link></li>
        </ul>
    </div>
}

function MovieDatabase() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"*"} element={<h1>Page not found</h1>}/>
            <Route path={"/movies"} element={<h1>Movies list</h1>}/>
            <Route path={"/movies/add"} element={<h1>Add a new movie</h1>}/>
        </Routes>
    </BrowserRouter>
}

root.render(<MovieDatabase />);