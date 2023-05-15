import React from 'react'
import { card } from '../assets'
import styles, { layout } from '../style'
import Button from './Button'

const CardDetails = () => {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo} >
        <h2 className={styles.heading2}>Find a better
          card dealer <br className='sm:block hidden' />
          in few easy steps. </h2>
        <p className={`${styles.paragraph} max-w-[470px]
          mt-5`}>So when the sm:block hidden classes
          are used together, it means that the
          element will be hidden by default on all
          screen sizes, but will be displayed as a
          block element on small screens. Here's an        
        </p>
        < Button style={'mt-10'} />
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='
        w-[100%] h-[100%]' />
      </div>

    </section>
  )
}

export default CardDetails