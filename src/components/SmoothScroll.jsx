import React, { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar';
function SmoothScroll() {
    var options={
        damping:0.01,
    }
    useEffect(()=>{
        Scrollbar.init(document.body, options);
    },[])
  return null
}

export default SmoothScroll