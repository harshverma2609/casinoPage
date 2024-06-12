import React from "react";
import { useEffect, useState } from 'react';

function Heading(){
    const [value, setValue] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const year=value.getFullYear();
    const month=months[value.getMonth()];

    const hours=value.getHours().toString().padStart(2, '0');
    const minutes=value.getMinutes().toString().padStart(2, '0');
    const seconds=value.getSeconds().toString().padStart(2, '0');

    const weekDay=['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    const day=weekDay[value.getDay()];
    const date=value.getDate().toString().padStart(2, '0');

    return(
        <div className="heading">
            <h1>Best Online Casino Sites - {month} {year}</h1>
            <p>Best Online Casino bonus guide in India. If you are looking to play at an Online Casino, but don’t know which one to choose then you have come to the right place. We take a huge range of different considerations into account, to ensure we only ever point you towards the best casinos and bonuses around. So choose your favourite bonus now and start playing today!</p>
            <div className="bonusUpdate">
                <p>Last bonus update:</p>
                <p id="time">{day}, {date} {month} {year} {hours}:{minutes}:{seconds} IST</p>
            </div>
        </div>
    );
}

export default Heading;
