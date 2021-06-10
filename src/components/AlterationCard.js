import React from 'react'

function AlterationCard(props) {

    return(
        <>
            <h3>{props.alteration.name} ${props.alteration.price}</h3>
            <br />
        </>
    )
}

export default AlterationCard