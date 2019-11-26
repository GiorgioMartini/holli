import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './flightCard.scss'

export function FlightCard ({flights}) {
  const [open, setOpen] = useState(false)

  function addDefaultSrc(e) {
    e.target.src = 'https://thumb2.holidaypirates.com/Heyb--pOABv6fdJUPfI5UDvkzLQ=/424x195/https://media.mv.urlaubspiraten.de/images/2019/11/5dd6574938114637411283sj5tm69i.jpg'
  }

  return (
    <div className='flex-wrap cards'>
        {flights &&
          flights.map( (x, i) => (
            <div className="flight-Card-wrapper card" key={i}>
              {/* <div className="flight-Card-padding"> */}
                {/* <div className="flight-Card"> */}
                  <img className="flight-card-img w-100" onError={(e) => addDefaultSrc(e)} src={x.images[0]} />
                  <p className="quicksand flight-Card-title">{x.name}</p>
                  <p className="flight-Card-body">{x.description}</p>
                {/* </div> */}
              {/* </div> */}
            </div>
          ))
        }
    </div>
  )
}

FlightCard.propTypes = {
  flights: PropTypes.array
}


// .substring(0,10)
