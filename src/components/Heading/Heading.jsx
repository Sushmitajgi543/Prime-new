import React from 'react'
import ".//Heading.scss"
function Heading({children}) {
  return (
   <h1 className='title'>
        {children}
   </h1>
  )
}

export default Heading