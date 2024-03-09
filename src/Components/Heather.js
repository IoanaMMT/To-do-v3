import * as React from 'react';

export default function DisplayHeather() {

const now = new Date();

const year = now.getFullYear();
const month = now.getMonth() + 1; // Note: Month is zero-based, so add 1
const day = now.getDate();

// get the current date and time as a string
const currentDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year}`;

// now.toLocaleString();
    
    return (
        <><h2>My Day</h2>
        <h3>{currentDate}</h3>
        </>

    )
}