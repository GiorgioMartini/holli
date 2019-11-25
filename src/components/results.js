import React, { useEffect, useState } from 'react'
import fetchHotels from './utils'
import PropTypes from 'prop-types'

export function Results ({ endpoint }) {

  const [results, setResults] = useState([])

  useEffect(() => {
    fetch(endpoint)
    .then((res) => res.json())
    .then(data => setResults(data))
    // fetchHotels(endpoint)
    //   .then( data => {
    //     setResults(data)
    //   })
  }, [endpoint])

  

  return (
    <div className=''>
      {results &&
        results.map( (x, i) => <p key={i}>{x.name}</p>)
      }
    </div>
  )
}

