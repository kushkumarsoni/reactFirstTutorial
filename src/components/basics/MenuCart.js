import React from 'react'

const MenuCart = ({menuData}) => {
    // console.log(menuData);
  return (
    <>
        <section className='main-card--cointainer'>
            {menuData.map((curElement)=>{
                const {id,name,category,image,description} = curElement;
                    return (
                        <>
                            <div className='card-container' key={id}>
                                <div className='card'>
                                    <div className='card-body'>
                                        <span className='card-number card-circle subtle'>{id}</span>
                                        {/* <span className='card-author subtle' style={{color:'red',fontWeightBold:'20px' }}>Breakfast</span> */}
                                        {/* <span className='card-author subtle' style={myStyle}>Breakfast</span> */}
                                        <span className='card-author subtle'>{ category}</span>
                                        <h2 className='card-title'>{ name }</h2>
                                        <span className='card-description subtle'>
                                           {description}
                                        </span>
                                        <div className='card-read'>Read</div>
                                    </div>
                                    <img src={curElement.image} alt="images" className='card-media' height="150" width="100%"/>
                                    <span className='card-tag subtle'>Order Now</span>
                                </div>
                            </div>
                        </>
                    )
            })}
        </section>
    </> 
  )
}

export default MenuCart
