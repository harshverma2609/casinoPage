import React from "react";
import imagesSrc from "./Images";

function EndOfpage(){
    const year=new Date().getFullYear();
    return(
        <div className="box">
            <div className="EndOfPage">
                <h4>Most reliable Online Casino Guide</h4>
                <p>As the most sought after resource for Online Casino sites, we have managed to accumulate many years of experience. This guide is made by players, for players. We've been reviewing sites ever since the online Online Casino industry was in its beginnings. Therefore, we know how to best provide you with detailed and useful information regarding current Online Casino sites and bonuses, rewards and cashbacks to offer you the best possible experience. At the time of writing, many Online Casino fans rely on us and we do everything we can to fulfill their expectations.</p>
                <p>We have become the Internet's most proven resource for reliable review of Online Casino sites. Our guarantee to you is that we will never stop looking for the best Online Casino sites.</p>
                <p>In most cases, registration takes place within a few minutes. After that, you can benefit greatly from welcome bonuses, free rewards, cashback, first lost bet back and much more which gives you a lot of extra money to play for. There are many ways to find good online Online Casino sites, but we have made it easy for you to find the best Online Casino bonuses and rewards available right now.</p>
                <div className="images mobile">
                    <img src={imagesSrc.cards} alt="cards"/>
                    <img src={imagesSrc.bonusRibbon} alt="bonusRibbon"/>
                    <img src={imagesSrc.freespins} alt="freeSpins"/>
                </div>
                <h4>Are Online Casino sites safe?</h4>
                <p>According to surveys, a safe online experience is what players prioritise most when it comes to online Online Casino. Therefore, we have decided to recommend only those Online Casino websites or apps that meet our security criteria. This means that all Casino websites and apps on our site guarantee mathematical justice, have a high safety standard and are subject to a wide range of conditions. By manually reviewing every Online Casino websites and its management, we give you the right conditions for a safe Casino experience.</p>
                <p>In most cases, the very best Casino sites use software from well-known software developers. When dealing with established actors, you can be sure that you are getting a quality service. One important thing to remember is that the best online Casino websites are always transparent when it comes to services and terms. That is, they will never try to hide terms from you. So if it is easy to find their terms, contact information and license information, it is a sure sign that they are actually serious!</p>
                <div className="images">
                    <img src={imagesSrc.netent} alt="netent"/>
                    <img src={imagesSrc.microgaming} alt="microgaming"/>
                    <img src={imagesSrc.nyxGaming} alt="nyxGaming"/>
                    <img src={imagesSrc.playNgo} alt="playNgo"/>
                    <img src={imagesSrc.YGGdrasil} alt="YGGdrasil"/>
                    <img src={imagesSrc.IGT} alt="IGT"/>
                </div>
            </div>
            <footer>All rights reserved © {year}</footer>
        </div>
    );
};

export default EndOfpage;
