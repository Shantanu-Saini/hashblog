import React, { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import service from '../appwrite/db.post'

const AllPosts = () => {
    const [posts, setPosts] = useState([])

    // Fetch posts when the component mounts 
    useEffect(() => {
        service.getAllPosts([]).then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default AllPosts