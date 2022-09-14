import React,{useState} from 'react'
import MenuApi from './MenuApi';
import MenuCart from './MenuCart';
import Navbar from './Navbar';
import './style.css';

const uniqueList = [...new Set(MenuApi.map((currentElement)=>{
    return currentElement.category;
})),"All"];
//console.log(uniqueList);

const Resturant = () => {
    const[menuData,setMenuData] = useState(MenuApi);
    const[menuList,setmenuList] = useState(uniqueList);

    const filterItem = (category) =>{
        if(category === 'All') {
            return setMenuData(MenuApi);

        }
        const updateList = MenuApi.filter((curElement)=>{
            return curElement.category === category;
        })
        setMenuData(updateList);
    }
  return (
    <>
        <Navbar filterItem = {filterItem} menuList={menuList} />
        <MenuCart menuData = {menuData} />
    </>
    
  )
}

export default Resturant