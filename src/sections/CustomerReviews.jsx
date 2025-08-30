import React from 'react'
import ReviewCard from '../components/ReviewCard'
import { reviews } from '../constants'


const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className='font-palanquin text-center text-4xl font-bold'>What Our
        <span className='text-coral-red'>Customers</span>
        Say?
      </h3>
      <p>
        My experience with this store has been exceptional. The product quality is top-notch, and the customer service is outstanding. I highly recommend them to anyone looking for reliable and stylish products.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review) => (
          <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
          />
        ))}
      </div>
    </section>
  )
}

export default CustomerReviews