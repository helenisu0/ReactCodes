import React from 'react'
import './Link.css'

const Article = ({name,imageUrl}) => {
  return (
    <div className="article">
      <div className="article-body">
        <b>{name}</b>
        <img src={imageUrl} height="90px" width="90px" object-fit="cover"/>
        </div>
    </div>
  )
}

export default Article