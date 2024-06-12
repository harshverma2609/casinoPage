import React from "react";
import { useEffect, useState } from 'react';

function Heading2(){
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

    return(
        <div className="heading2">
            <h3>INDIA'S TOP </h3>
            <h3>ONLINE CASINOS</h3>
            <h4>{month} {year}</h4>
        </div>
    );
}

export default Heading2;
