import React, { useEffect, useState } from 'react'
import { fetchHotels } from './utils'
import PropTypes from 'prop-types'
import styles from './results.scss'
import { FlightResults } from './flightResults'

export function Search ({ endpoint, title = 'Flights for your next adventure' }) {
  const [search, setsearch] = useState([])

  useEffect(() => {
    fetchHotels(endpoint)
      .then( data => setsearch(data))
      .catch(e => console.log(e))
  }, [endpoint])

  return (
    <div className=''>
      <h2 className=''>{title}</h2>
        <FlightResults
          flights={search}
        />
    </div>
  )
}

Search.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string
}
