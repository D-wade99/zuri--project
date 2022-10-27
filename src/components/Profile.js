import React from "react";


export default function Profile(){
    return(
        <header className="header">
            <img src="Images/profilePic.png" alt="profile-pic" className="img" id="profile-img"/>
            <p id="twitter">Sijuade Daniel</p>
            <p id="slack" hidden>Sijuade Daniel</p>
        </header> 
    )
}