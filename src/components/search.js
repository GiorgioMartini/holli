import React, { useEffect, useState } from 'react'
import { fetchHotels } from './utils'
import PropTypes from 'prop-types'
import styles from './results.scss'
import { FlightResults } from './flightResults'

export function Search ({ endpoint, title = 'Flights for your next adventure' }) {
  const [results, setresults] = useState([])
  const [filteredResults, setFilteredResults] = useState([])
  const [stars, setStars] = useState([])
  const ratings = [1,2,3,4,5]

  useEffect(() => {
    fetchHotels(endpoint)
      .then( data => {
        setFilteredResults(data)
        setresults(data)
      })
      .catch(e => console.log('MAKE SOMETHING IN UI', e))
    }, [endpoint])

  
  function handleStarHover(starRate) {
    setStars(starRate)
    setFilteredResults(results)
    setFilteredResults(results.filter(x =>  x.stars <= starRate))
  }


  return (
    <div className=''>
      <h2 className=''>{title}</h2>

      {ratings.map( (starRate, i) => (
        <span
          key={i}
          onMouseEnter={() => handleStarHover(starRate)}>
          ★
        </span>
      ))}

        <FlightResults
          flights={filteredResults}
        />
    </div>
  )
}

Search.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string
}
