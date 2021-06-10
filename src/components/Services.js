import React from 'react'
import AlterationCard from './AlterationCard'

function Services(props) {
    return(
        <>
            <div className="info-card">
                <br />
                <h1>Basic Alterations</h1>
                <br />
                {props.alterations.map(alteration => <AlterationCard key={alteration.id} alteration={alteration} />)}
                <br />
                <h3>Don't see what you're looking for? We'd love to hear about it!</h3>
                <p>Visit us at: 5555 Alteration Dr. Magnolia TX 77362</p>
                <p>Call us at (555)555-5555</p>
            </div>
        </>
    )
}


export default Services