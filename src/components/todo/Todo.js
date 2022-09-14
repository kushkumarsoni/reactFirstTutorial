import React,{useState,useEffect} from 'react'
import './style.css';

const getLocalData = () => {
    const lists = localStorage.getItem("MyTodoList");
    if(lists){
        return JSON.parse(lists);
    }else{
        return [];
    }
}

const Todo = () => {
    const [inputData,setInputData] = useState("");
    const [item,setItem] = useState(getLocalData());
    const [editedItem,setEditedItem] = useState("");
    const [toggleButton,setToggleButton] = useState(false);

    const addItems = () =>{
        if(!inputData) {
            alert('Plz enter the data');
        }else if(inputData && toggleButton){
            setItem(item.map((currentElement)=>{
                if(currentElement.id === editedItem){
                    return {...currentElement,name:inputData};
                }
                return currentElement;
            }));
            setInputData([]);
            setEditedItem("");
            setToggleButton(false);
        }else{
            const myNewInputData = {
                id:new Date().getTime().toString(),
                name: inputData,
            };
            setItem([...item,myNewInputData]);
            setInputData("");
        }
    }
    const editItem=(id)=>{
        const edited_item = item.find((currentElement)=>{
            return currentElement.id === id;
        });
        setInputData(edited_item.name);
        setEditedItem(id);
        setToggleButton(true);
    }
    const deleteItem = (id) =>{
        const updatedItem = item.filter((currentElement)=>{
            return currentElement.id != id;

        });
        setItem(updatedItem);
    };

    const removeAll = () =>{
        setItem([]);
    };

    useEffect(()=>{
        localStorage.setItem("MyTodoList",JSON.stringify(item));
    },[item]);

    
  return (
    <>
        <div className='main-div'>
            <div className='child-div'>
                <figure>
                    <img src="./images/todo.svg" alt="todo logo" />
                    <figcaption> Add Your List here</figcaption>
                </figure>
                <div className='addItems'>
                    <input type="text" value={inputData} onChange={(e)=>setInputData(e.target.value)} placeholder='Add Items' classNam='form-control' />
                   {toggleButton?(<i className="far fa-edit add-btn" onClick={addItems}></i>)
                   :(<i className="fa fa-plus add-btn" onClick={addItems}></i>)}
                    
                </div>
                {/* Show Our Items */}
                <div className='showItems'>
                    {item.map((currentElement,index)=>{
                        return (
                            <div className='eachItem' key={index}>
                                <h3>{currentElement.name}</h3>
                                <div className='todo-btn'>
                                    <i className="far fa-edit add-btn" onClick={()=>editItem(currentElement.id)}></i>
                                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(currentElement.id)}></i>
                                </div>
                            </div>
                        );
                     })}
                </div>

                <div className='showItems'>
                    <button className='btn effect04' data-sm-link-text='Remove All' onClick={removeAll}>
                        <span> CHECK LIST </span></button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Todo