import React from 'react';
import AddPostForm from './components/AddPostForm';
import PostsContainer from './components/PostsContainer';
import { posts_data } from './data/posts_data';
import { useState } from 'react';

const App = () => {

  let [ posts, setPosts ] = useState(posts_data);

  const changeLike = id => {

    const target_post = posts.find(el => el.id === id);

    target_post.like = !target_post.like;

    setPosts([...posts]);
  }

  const deletePost = id => setPosts(posts.filter(el => el.id !== id));

  const addNewPost = new_post => setPosts([...posts, new_post]);

  const addNewComment = ( post_id, new_comment ) => {

    const target_post = posts.find(el => el.id === post_id);

    target_post.comments.push(new_comment);

    setPosts([...posts]);
  }

  const deleteComment = ( comment_id, post_id ) => {

    const target_post = posts.find(el => el.id === post_id);

    target_post.comments = target_post.comments.filter(el => el.id !== comment_id);

    setPosts([...posts]);

  }

  return (
    <div>
      <AddPostForm addNewPost={addNewPost} />
      <PostsContainer posts={posts}
                      changeLike={changeLike}
                      deletePost={deletePost}
                      addNewComment={addNewComment}
                      deleteComment={deleteComment} />
    </div>
  )
}

export default App