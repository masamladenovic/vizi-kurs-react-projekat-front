import React from 'react'
import { Link } from 'react-router-dom'
import { RiArrowUpLongLine } from "react-icons/ri";
import "./css/BookNow.css"

const BookNow = () => {
  return (
    <section className="book-now">
      <div className="book-your-stay-div">
        <Link to="/booking">BOOK YOUR STAY NOW</Link>
        <div className="arrow-circle">
          <RiArrowUpLongLine />
        </div>
      </div>
      <div className="book-now-image">
        <img src="/images/home/evening.jpg" alt="Evening" />
        <img src="/images/branding/transparent-logo.png" alt="Logo" className="book-now-logo-img" />
      </div>
    </section>
  )
}

export default BookNow  