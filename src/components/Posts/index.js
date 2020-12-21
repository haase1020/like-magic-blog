import React from 'react'
import Post from './Post'
import Banner from '../Banner'
const Posts = ({ posts, title }) => {
  return (
    <section className="info">
      <div className="posts-center">
        {/* posts column */}
        <article>
          <h3 className="posts-title">{title}</h3>
          {posts.map(post => {
            return <Post key={post.id} {...post} />
          })}
        </article>
        {/* banner column */}
        <article>
          <Banner />
        </article>
      </div>
    </section>
  )
}

export default Posts
