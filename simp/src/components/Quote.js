import React from 'react'

function Simpson ({quote2}) {
    return(
    <div>
        <h3>{quote2.character}</h3>
        <img src={quote2.image} alt='img simpson'/>
        <p>{quote2.quote}</p>
    </div>
)}

export default Simpson;