import React, { useEffect, useState } from 'react'
import { fetchHotels } from './utils'
import PropTypes from 'prop-types'
import styles from './results.scss'
import { FlightCard } from './flightCard'

export function Results ({ endpoint, title = 'Flights for your next adventure' }) {
  const [results, setResults] = useState([])

  useEffect(() => {
    fetchHotels(endpoint)
      .then( data => setResults(data))
      .catch(e => console.log(e))
  }, [endpoint])


  return (
    <div className=''>
      <h2 className=''>{title}</h2>
        <FlightCard
          flights={results}
        />
    </div>
  )
}

Results.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string
}