import React, { FC } from 'react'

interface Iprops {
    className: string ;
    label: string;
}

const HouseButton:FC<Iprops> = ({className , label}) => {
  return (
    <div className={className}>
       {label}
    </div>
  )
}

export default HouseButton