import React from "react";
import "../assets/styles/Menu.css"

function Menu({ mountRef }) {
    return (
        <div id="menuContainer">
            <h1>Click to Play</h1><br></br>
            <p>Move with W, A, S, D and look around by moving the mouse.</p>
            <div ref={mountRef} />
        </div>
    );
}

export default Menu;
