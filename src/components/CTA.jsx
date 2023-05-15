import React from 'react'
import Button from './Button'
import styles from '../style'

const CTA = () => (
  <section className={`mt-14 ${styles.flexCenter} ${styles.marginY}
  ${styles.padding} sm:flex-row flex-col
  bg-black-gradient rounded-[20px] box-shadow`}>
    <div className='flex-1 flex flex-col'>
      <h2 className={`${styles.heading2}`}>Let's try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Every thing you need to accept card payments
        and grow your business anywhere on the planet
      </p>
    </div>

    <div className={`button ${styles.flexCenter} 
    sm:ml-10 ml-0 sm:mt-6 mt-6`}>
      <Button />
    </div>
  </section>
)


export default CTA