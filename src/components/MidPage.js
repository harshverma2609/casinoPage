import React from "react";
import List from "./casinosList";

function MidPage(){
    return(
        <div className="content">
            <div className="featureBar">
                <p><img src={require('./Images/tick-legal.png')} alt="tick-Legal"/>100% Secure</p>
                <p><img src={require('./Images/flag-in.png')} alt="tick-Legal"/>Indian Players</p>
                <p><img src={require('./Images/tick-wallet.png')} alt="tick-Legal"/>Fast Withdrawals</p>
            </div>
            <div className="bar">
                <p>SITES</p>
                <p>BONUS</p>
                <p>RATING</p>
                <p>PLAY NOW</p>
            </div>
            <List />
        </div>
    );
}

export default MidPage;
