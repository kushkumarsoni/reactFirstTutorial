import React from 'react'
import './style.css';

const UseEffect = () => {
    const initialData = 1;
    const[count,setCount] = React.useState(initialData);
    React.useEffect(() => {
      document.title = `Chats(${count})`;
    })
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
        </div>
    </>
  )
}

export default UseEffect