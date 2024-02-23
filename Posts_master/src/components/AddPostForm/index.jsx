import React from 'react';
import s from './index.module.css';


export default function AddPostForm({ addNewPost }) {

  const postFormSubmit = e => {
    e.preventDefault();

    const { title, description } = e.target;

    const new_post = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      comments: []
    }

    addNewPost(new_post);

    e.target.reset();
  }

  return (
    <form className={s.add_post_form} onSubmit={postFormSubmit}>
      <input type="text" name='title' placeholder='Your title' />
      <input type="text" name='description' placeholder='Your description' />
      <button>New post</button>
    </form>
  )
}
