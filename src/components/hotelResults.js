import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './hotelResults.scss'
import { fetchPirateApi } from './utils'

const reviewsEndPoint = 'http://fake-hotel-api.herokuapp.com/api/reviews'

export function HotelResults ({hotels}) {
  const [reviews, setReviews] = useState(null)
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)

  function addDefaultSrc(e) {
    e.target.src = 'https://thumb2.holidaypirates.com/Heyb--pOABv6fdJUPfI5UDvkzLQ=/424x195/https://media.mv.urlaubspiraten.de/images/2019/11/5dd6574938114637411283sj5tm69i.jpg'
  }

  function showReviews (i, x) {
    const endpoint = `${reviewsEndPoint}?hotel_id=${x.id}`
    setReviews('')
    setLoading(true)
    
    fetchPirateApi(endpoint)
      .then( data => {
        setLoading(false)
        setReviews(data)
      })

    setSelected(i)
  }

  function reviewsClass (i) {
    return selected === i ? 'visible' : 'hidden'
  }

  return (
    <div className='flex-wrap cards'>
      {hotels.length >= 1 &&
        hotels.map( (x, i) => (
          <div className="card relative" key={i}>
            <p className="hotel-price">from <span className="hotel-price-highlight">£{x.price}</span> p.p</p>
            <img className="flight-card-img w-100" onError={(e) => addDefaultSrc(e)} src={x.images[0]} />
            <p className=" quicksand flight-Card-title">{x.name}</p>
            <p className="flight-Card-body">{x.description}</p>
            <b className="pointer" onClick={() => showReviews(i, x)}>See reviews</b>
            <div className={`reviews reviews-wrapper ${reviewsClass(i)}`} >
              <b className='close-btn pointer' onClick={() => setSelected(null)}>✚</b>
              {reviews && !loading
                ? ( reviews.map((review, j) => (
                      <div key={j}>
                        <b>{review.name}</b>  
                        <p>{review.comment}</p>  
                      </div>
                    )))
                : (
                  <p>Loading...</p>           
                )}
              </div>
          </div>
        ))
      }
    </div>
  )
}

HotelResults.propTypes = {
  hotels: PropTypes.array
}
