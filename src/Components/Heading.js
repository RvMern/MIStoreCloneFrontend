import React from 'react'
import "../Styles/heading.css"

const Heading = ({title}) => {
  return (
    <>
        <div className='heading'>
        <hr />
        <h3 className='heading-content'>{title}</h3>
        <hr />
        </div>
    </>
  )
}

export default Heading