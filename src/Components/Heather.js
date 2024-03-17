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
        <>
            <div className='top_row'>
                <h2 id='my_day'>My Day</h2>
                 <h3 id='today_date'>{currentDate}</h3>
            </div>
        </>

    )
}