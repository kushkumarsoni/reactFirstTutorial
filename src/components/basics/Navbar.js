import React from 'react'

const Navbar = ({filterItem,menuList}) => {
  return (
    <>
        <nav className='navbar'>
            <div className='btn-group'>    
                {menuList.map((cuElement)=>{
                    return (
                        <button className='btn-group__item' onClick={()=> filterItem(cuElement) }>{cuElement}</button>
                    )
                })}
                {/* <button className='btn-group__item' onClick={()=> setMenuData(MenuApi) }>All</button> */}                
            </div>
        </nav>
    </>
  )
}

export default Navbar