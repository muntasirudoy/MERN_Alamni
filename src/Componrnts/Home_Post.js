import React from 'react'
import Home_Post_Input from './Home_Post_Input'
import Home_Post_View from './Home_Post_View'
import Home_Wget from './Home_Wget'

const Home_Post = () => {
  return (
   <>
        <div className='container'>
        <div class="row">
            <div class="col-lg-8">
              <Home_Post_Input />
              <Home_Post_View />
           </div>
           <div className="col-lg-4 widget-block widget-break-lg">
              <Home_Wget />
           </div>
         </div>
       </div>
   </>


    
  )
}

export default Home_Post