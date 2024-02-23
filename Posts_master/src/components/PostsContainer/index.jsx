import React from 'react';
import Post from '../Post';
import s from './index.module.css';

export default function PostsContainer({ posts, changeLike, deletePost, addNewComment, deleteComment }) {
  return (
    <div className={s.posts_container}>
      {
        posts.map(el => <Post key={el.id} {...el}
                              changeLike={changeLike}
                              deletePost={deletePost}
                              addNewComment={addNewComment}
                              deleteComment={deleteComment} />)
      }
    </div>
  )
}
