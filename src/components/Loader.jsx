import React from 'react'
import  spinner from "../../public/Image/spinner.gif"
function Loader() {
  return (
    <>
    <div className="img">
        <img src={spinner} alt="" />
    </div>
    </>
  )
}

export default Loader