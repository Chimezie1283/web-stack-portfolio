import React from 'react'
import classes from './footer.module.css'

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.col}>
          <h2>About Yarech Homes</h2>
          <p>
            Yareach Enterprise Homes, is an application where property owners and verified agents advertise there properties so that prospective buyers and clients can make their choices and initiate transactions
          </p>
        </div>
        <div className={classes.col}>
          <h2>Contacts</h2>
          <span>Phone: +234 70 6835 7496</span>
          <span>YouTube: < a href='https://www.youtube.com/channel/UCj_vZEeyibsb8eGTjdzY8JQ'>Agbo Chimezie</a></span>
          <span>GitHub: <a href='https://github.com/Chimezie1283'>Chimezie1283</a></span>
        </div>
        <div className={classes.col}>
          <h2>Location</h2>
          <span>Continent: Africa</span>
          <span>Country: Nigeria</span>
          <span>Current Location: Abuja</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer