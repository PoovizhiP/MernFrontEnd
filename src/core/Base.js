import React from 'react'
import Menu from './Menu';

const Base=({
    title=" MY TiTLE",
    description="My description",
    className="bg-dark text-white p-4",
    children
})=>(
    <div>
    <Menu />
     <div className="container-fluid">
   <div className="jumbotron bg-dark text-white text-center">
    <h2 className="display-4">
       {title}
    </h2>
    <p className="lead">{description}</p>
   </div>
  <div className={className}>
  {children}
  </div>
     </div>
     <footer className="footer bg-dark mt-auto py-3 font:10px">
         <div className="container-fluid bg-success text-white text-center">
             <h5>
                 if you got any queries feel free to reachout!
             </h5>
             <button className="btn btn-warning btn-lg pt-1 py-1 ">Contact Us</button>
         </div>
         <div className="container">
             <span className="text-muted">
             An amazing <span className="text-white">MERCHs</span>  are here
             </span>
         </div>
     </footer>
    </div>
)

export default Base;