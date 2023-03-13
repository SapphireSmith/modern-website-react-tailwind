import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
const Billing = () => {
  return (
    <section id='section' className={`${layout.sectionReverse} content-center `}>
      <div className={layout.sectionImgReverse}>
        <img src={bill} alt="bill"
          className='w-[100%] h-[100%] relative z-[5]' />

        <div className='absolute z-[3] -left-1/2
          top-0 w-[50%] h-[50%] rounded-full 
          white__gradient'/>
        <div className='absolute z-[1] -left-1/2
          bottom-0 w-[50%] h-[50%] rounded-full 
          pink_gradient'/>
      </div>

      <div className={`${layout.sectionInfo} ml-26`}>
        <h2 className={`justify-center ${styles.heading2}`}>
          Easily control your <br className='sm:block
          hidden'/>billing & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Elit enim send massa etiam.Mauris eu
          Alternatively, you can use an implicit
          return by removing the curly braces and
          adding parentheses around the FeatureCard
          component:
        </p>

        <div className='flex flex-row flex-wrap
          sm:mt-10 mt-6'>
          <img src={apple} alt="apple_store"
            className='w-[128px] h-[42px] object-contain
            cursor-pointer'/>
          <img src={google} alt="google_play"
            className='w-[128px] h-[42px] object-contain
            cursor-pointer' />
        </div>
      </div>
    </section>
  )
}
export default Billing