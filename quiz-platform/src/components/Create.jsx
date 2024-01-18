import React from 'react'
import Menu from "./Menu";
import "./Create.css";

const Create = () => {
    return (
        <div>
            <Menu />
            <div className="container">
            <form class="form">
                <input placeholder="Enter Quiz Name" class="input" type="text" />
                <select>
                    <option value="">Select No of Questions</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                
                <input placeholder="Enter your email" class="input" type="text" />
                <input placeholder="*********" class="input" type="password" />

                <button>Submit</button>
            </form>
            </div>
            
        </div>
        )
}

                    export default Create;