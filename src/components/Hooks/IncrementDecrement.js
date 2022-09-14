import React from 'react'
import './style.css';

const IncrementDecrement = () => {
    const initialData = 1;
    const[count,setCount] = React.useState(initialData);
  return (
    <>
        <div className='center_div'>
            <p>{count}</p>
            <div className='button2' onClick={()=> setCount(count+1)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Incr
            </div>
            <div className='button2' onClick={()=> count>0 ?setCount(count-1) : setCount(0)}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Dcr
            </div>
        </div>
    </>
  )
}

export default IncrementDecrement