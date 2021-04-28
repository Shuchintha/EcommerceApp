import React from 'react'
import PropTypes from 'prop-types'
import '../styles/rating.css'
const Rating = ({ value, reviews, color }) => {
  const stars = [1, 2, 3, 4, 5]
  return (
    <div className='rating'>
      {stars.map((star, index) => {
        return (
          <span key={index}>
            <i
              style={{ color }}
              className={
                value >= star
                  ? 'fas fa-star'
                  : value >= star + 0.5
                  ? 'fas fa-star-half-alt'
                  : 'far fa-star'
              }
            ></i>
          </span>
        )
      })}
      <span>({reviews && reviews} reviews)</span>
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  reviews: PropTypes.number.isRequired,
  color: PropTypes.string,
}
Rating.defaultProps = {
  color: '#FF9529',
}
export default Rating
