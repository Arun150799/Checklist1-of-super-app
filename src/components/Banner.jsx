import React from 'react';
import img1 from '../images/img.png';

function Banner() {
  return (
    <div>
      <>
      <div className="left">
        <h5 className='alreadyAcc'>Already have an account?</h5>
        <button className='btn1'>Sign in</button>
        <h3 className='conclution'>Discover new things on Superapp</h3>
        <img src={img1} width='750rem' height='797rem'/>
      </div>
      </>
    </div>
  )
}

export default Banner
