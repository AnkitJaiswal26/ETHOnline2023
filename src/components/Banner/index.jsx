import React from 'react'

const Banner = ({name}) => {
  return (
    <>
    <section className='card card-body h-80 md:h-48 bg-indigo-900'>
        <div className='hstack'>
        <div
          className="my-auto py-10 px-10"
        >
          <h1 className="font-normal font-bold tracking-tight text-gray-300 sm:text-2xl">{name}</h1>
          </div>
        </div>
    </section>
    </>
  )
}

export default Banner;