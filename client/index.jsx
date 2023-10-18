import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

function FrontPage() {
    return <div>
<<<<<<< HEAD
        <h1>Movie database :)</h1>
        <ul>
            <li><Link to={"/movies"}>See movie list</Link></li>
            <li><Link to={"/movies/add"}>Add new movie</Link></li>
=======
        <h1>Movie database</h1>
        <ul>
            <li><Link to={"/movies"}>Show movies</Link></li>
            <li><Link to={"/movies/add"}>Add movies</Link></li>
>>>>>>> 4644305fe5c5326dae517e9f8a3742b3dee09910
        </ul>
    </div>
}

<<<<<<< HEAD
function MovieApplication() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"*"} element={<h1>Page not found! :/</h1>}/>
            <Route path={"/movies"} element={<h1>Movie list</h1>}/>
=======
function MovieDatabase() {
    return <BrowserRouter>
        <Routes>
            <Route path={"/"} element={<FrontPage/>}/>
            <Route path={"*"} element={<h1>Page not found</h1>}/>
            <Route path={"/movies"} element={<h1>Movies list</h1>}/>
>>>>>>> 4644305fe5c5326dae517e9f8a3742b3dee09910
            <Route path={"/movies/add"} element={<h1>Add a new movie</h1>}/>
        </Routes>
    </BrowserRouter>
}

<<<<<<< HEAD
root.render(<MovieApplication/>);
=======
root.render(<MovieDatabase />);
>>>>>>> 4644305fe5c5326dae517e9f8a3742b3dee09910
