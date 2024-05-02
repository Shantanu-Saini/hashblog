import React from 'react'
import service from '../appwrite/db.post'
import { Link } from 'react-router-dom'

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-200 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img src={service.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
        </div>
        <h1 className='text-xl font-bold'>
          {title}
        </h1>
      </div>
    </Link>
  )
}

export default PostCard