import React,{useReducer} from 'react'
import './style.css';

const reducer = (state,action) => {
    if(action.type === 'incr'){
        state = state+1;
    }
    if(state>0 && action.type === 'dcr'){
        state = state-1;
    }
    return state;
}

const UseReducer = () => {
    const initialData = 1;
    // const[count,setCount] = React.useState(initialData);
    const [state,dispatch] = useReducer(reducer,initialData);
  return (
    <>
        <div className='center_div'>
            <p>{state}</p>
            <div className='button2' onClick={()=> dispatch({type: "incr"})}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Incr
            </div>
            <div className='button2' onClick={()=> dispatch({type: "dcr"})}>
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

export default UseReducer