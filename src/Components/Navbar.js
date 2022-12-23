import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <>
             <div className="nav">
        <img src="https://w7.pngwing.com/pngs/764/620/png-transparent-web-feed-computer-icons-rss-feed-angle-text-rectangle-thumbnail.png" alt="" className='abb'/>
        <h6 className='right-side'>AAV INNOVATION LABS</h6>
        <h3 className='wel_sanjay1'>Create Component Assignment</h3>
        <h3 className='wel_sanjay'>Welcome Sanjay Kumar</h3>
         <div className="placed">
             <img className='moves' src="data:image/png;base64,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" alt="" />
        <img src="https://png.pngtree.com/png-vector/20191018/ourlarge/pngtree-question-mark-vector-icon-png-image_1824218.jpg" alt="" className='moves' />
        <img src="https://t4.ftcdn.net/jpg/01/09/46/77/360_F_109467767_JwzMoMf9EMEaPedIfwXIDquzwjENZQjj.jpg" alt="" className='moves' />
         </div>
    </div>

    

    
    </>
  )
}

export default Navbar