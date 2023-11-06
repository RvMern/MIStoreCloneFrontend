import React from 'react'
import VideoCard from './VideoCard';
import "../Styles/Videos.css"

const Videos = ({Videos}) => {
  return (
    <div className='Videos'>
        {
            Videos.map((item,index)=>{
                return <VideoCard image={item.image} name={item.name} key={item.image} index={index} />
            })
        }
    </div>
  )
}

export default Videos