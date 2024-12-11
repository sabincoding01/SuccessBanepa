import React from 'react'
import CountUp from 'react-countup'
const NumberCounter = () => {
  return (
    <div className='bg-orange-500 text-white py-12 mt-5'>
    <div className='container grid grid-cols md:grid-cols-3 gap-8 '>
<div className='flex flex-col items-center justify center'>
    <p>
        <CountUp
        start={0}
        end={15}
        duration={3}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        />
    </p>
    <p>Expert tutors</p>
</div>

<div  className='flex flex-col items-center justify center'>
    <p>
    <CountUp
        start={0}
        end={800}
        suffix='+'
        duration={3}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        />
        
    </p>
    <p>Visa Granted Student</p>
</div>

<div className='flex flex-col items-center justify center'>
    <p>
    <CountUp
        start={0}
        end={1000}
        suffix='+'
        duration={3}
        enableScrollSpy={true}
        scrollSpyOnce={true}
        />
    </p>
    <p>Trusted Followers</p>
</div>




    </div>
    
    </div>
  )
}

export default NumberCounter