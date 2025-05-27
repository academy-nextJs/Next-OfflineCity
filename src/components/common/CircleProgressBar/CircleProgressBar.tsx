'use client'

import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type profProgressBard = {
    percentage : number
}
const CircleProgressBar = ({percentage}:profProgressBard) => {
  return (
    <div style={{width: 150 , height: 150}}>
      <CircularProgressbar 
        value={percentage}
        strokeWidth={17}
        styles={buildStyles({
            textColor: '#333',
            pathColor:'#8cff45',
            trailColor:'#E5E7EB',
        })}
      />       
 
    </div>
  )
}

export default CircleProgressBar