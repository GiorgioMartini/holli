import React, { useEffect, useState } from 'react'
import { fetchPirateApi } from './utils'
import PropTypes from 'prop-types'
import { HotelResults } from './hotelResults'
import styles from './search.scss'

export function Search ({ endpoint, title = '☠️-crew Trip' }) {
  const sliderMaxVal = 4
  const errorText = `Aargh! Something went wrong, we've notified our pirate engineers and it should be fixed soon. for now refresh your page and pick the perfect hotel for the next trip! `
  const [results, setresults] = useState([])
  const [priceToFilter, setPriceToFilter] = useState(1000)
  const [filteredResults, setFilteredResults] = useState([])
  const [stars, setStars] = useState(3)
  const [error, setError] = useState(false)
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
    fetchPirateApi(endpoint)
      .then( data => {
        setFilteredResults(data)
        setresults(data)
        const max = Math.max.apply(Math, data.map((x) => x.price))
        setMaxPrice(max)
        setPriceToFilter(max)
      })
      .catch(e => {
        setError(true)
      })
    }, [endpoint])
  
  function handleStarHover(starRate) {
    setStars(starRate)
    setFilteredResults(results)
    filterResutls()
  }

  function filterResutls() {
    setFilteredResults(results.filter(x =>  {
      return x.stars <= stars && x.price <= priceToFilter
    }))
  }

  function starClass(starRate) {
    return starRate <= stars ? 'pointer star-active' : 'pointer stars'
  }
  
  function handleSliderChange(e) {
    let priceFraction = maxPrice/sliderMaxVal
    setPriceToFilter(priceFraction*(parseInt(e.target.value)+1))
    filterResutls()
  }

  return (
    <div>
      <h2 className='title'>{title}</h2>
      <div className="flex filter-wrapper">
        <div>
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
        </div>
        <span className="filtered-hotel-results">{filteredResults.length} hotels</span>
      </div>
      { error
        ? (<p className="error">{errorText}</p>)
        : (<HotelResults hotels={filteredResults} />)
      }
    </div>
  )
}

Search.propTypes = {
  endpoint: PropTypes.string,
  title: PropTypes.string
}
