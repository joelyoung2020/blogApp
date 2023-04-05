import React from 'react'

function Menu() {

  const posts = [
    {
      id: 1,
      title: "Naruto",
      desc: "Seventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of Konaha",
      img: "https://i.pinimg.com/originals/5f/c2/6d/5fc26d349f70ac3e9b88d3eee5d77987.jpg",
    },
    {
      id: 2,
      title: "Naruto",
      desc: "Seventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of Konaha",
      img: "https://i.pinimg.com/originals/5f/c2/6d/5fc26d349f70ac3e9b88d3eee5d77987.jpg",
    },
    {
      id: 3,
      title: "Naruto",
      desc: "Seventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of Konaha",
      img: "https://i.pinimg.com/originals/5f/c2/6d/5fc26d349f70ac3e9b88d3eee5d77987.jpg",
    },
    {
      id: 4,
      title: "Naruto",
      desc: "Seventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of KonahaSeventh Hokage of Konaha",
      img: "https://i.pinimg.com/originals/5f/c2/6d/5fc26d349f70ac3e9b88d3eee5d77987.jpg",
    },
    
  ];

  return (
    <div className='menu'>
      <h1>Other posts you may like</h1>
      {posts.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.img} alt="" />
          <h2>{post.title}</h2>
          <button>Read More</button>
        </div>
      ))}
    </div>
  )
}

export default Menu