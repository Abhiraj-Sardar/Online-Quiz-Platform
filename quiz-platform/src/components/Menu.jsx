import React from "react";
import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu=()=>{
    return(
        <div className="navbar container-fluid">
            <div className="row">
                <div className="navbar col-12">
                   <NavLink to={"/CreateQuiz"}><h1>Create Quiz</h1></NavLink> 
                    <h1>Attend Quiz</h1>
                </div>
            </div>
        </div>
    )
}

export default Menu;