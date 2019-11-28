import React, { useEffect, useState } from 'react'
import { fetchHotels } from './utils'
import PropTypes from 'prop-types'
import styles from './search.scss'
import { FlightResults } from './flightResults'

export function Search ({ endpoint, title = 'Flights for your next adventure' }) {
  const sliderMaxVal = 4
  const [results, setresults] = useState([])
  const [priceToFilter, setPriceToFilter] = useState(0)
  const [filteredResults, setFilteredResults] = useState([])
  const [stars, setStars] = useState(3)
  const ratings = [1,2,3,4,5]
  const [maxPrice, setMaxPrice] = useState(0)

  useEffect(() => {
    function filterResults() {
      setFilteredResults(results.filter(x =>  {
        return x.stars <= stars && x.price <= priceToFilter
      }))
    }
  
    filterResults();
  }, [priceToFilter, stars])

  useEffect(() => {
    fetchHotels(endpoint)
      .then( data => {
        setFilteredResults(data)
        setresults(data)
        const max = Math.max.apply(Math, data.map((x) => x.price ))
        setMaxPrice(max)
        setPriceToFilter(max)
        // filterResutls()
      })
      .catch(e => console.log('MAKE SOMETHING IN UI', e))
    }, [endpoint])
  
  function handleStarHover(starRate) {
    setStars(starRate)
    setFilteredResults(results)
    filterResutls()
  }

  // function filterResutls() {
  //   setFilteredResults(results.filter(x =>  {
  //     return x.stars <= stars && x.price <= priceToFilter
  //   }))
  // }

  function starClass(starRate) {
    return starRate <= stars ? 'pointer star-active' : 'pointer stars'
  }
  
  //Slider
  function handleSliderChange(e) {
    let priceFraction = maxPrice/sliderMaxVal
    setPriceToFilter(priceFraction*(parseInt(e.target.value)+1))
    filterResutls()
  }

  return (
    <div className=''>
      <h2 className=''>{title}</h2>
      <span>Filter by stars </span>
      {ratings.map( (starRate, i) => (
        <span
          key={i}
          onMouseEnter={() => handleStarHover(starRate)}
          className={starClass(starRate)}>
          ★
        </span>
      ))}
      <div className="price-filter-wrapper">
          <span className="filter-max-price">
            Max price:
            {`${priceToFilter}$`}
          </span>
          <input
            type="range"
            id="start"
            name="volume"
            min="0"
            max={sliderMaxVal}
            onChange={e => handleSliderChange(e)}
            />
      </div>
        <p>filtered Results: {filteredResults.length}</p>
        <p>Results: {results.length}</p>
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
