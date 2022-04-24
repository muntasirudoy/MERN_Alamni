import React from 'react'
import Left_Sidebar from '../Componrnts/Left_Sidebar'
import Right_Sidebar from '../Componrnts/Right_Sidebar'
import Home from '../Pages/Home'


const Sidebar = ({children}) => {

    console.log(children)

  return (

          <div className='main_container'>
                <Left_Sidebar/>
                <Right_Sidebar/>
                <Home />
                {/* {children} */}
           </div>

  )
}

export default Sidebar