import React from 'react'
import Delete from '../components/325437.png'
import Edit from '../components/3597088.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'


function Single() {
  return (
    <div className='single'>
       <div className='content'>
          <img src='https://i.pinimg.com/originals/5f/c2/6d/5fc26d349f70ac3e9b88d3eee5d77987.jpg'/>
      
       <div className='user'>
          <img src='https://i.pinimg.com/originals/5f/c2/6d/5fc26d349f70ac3e9b88d3eee5d77987.jpg'/>
       <div>
        <span>John</span>
        <p>Posted 2 days ago</p>
       </div>
       <div className="edit">
          <Link to={'/write/edit=2'}>
             <img src={Edit} alt="" />
             
          </Link>
          <img src={Delete} alt="" />
       </div>
       </div>
       <h1>Naruto</h1>
       <p>Seventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage ofSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage ofSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage ofSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage ofSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage ofSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of Konaha KonahaSeventh Hokage of Konaha KonahaSeventh Hokage of Konaha KonahaSeventh Hokage of Konaha KonahaSeventh Hokage of Konaha KonahaSeventh Hokage of Konaha</p>
       </div>
        <Menu/>
    </div>
  )
}

export default Single