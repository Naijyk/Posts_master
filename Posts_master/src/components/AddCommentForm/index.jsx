import React from 'react';
import s from './index.module.css';

export default function AddCommentForm({ addNewComment, post_id }) {

  const commentFormSubmit = event => {
    event.preventDefault();

    const { comment } = event.target;

    const new_comment = {
      id: Date.now(),
      text: comment.value
    }

    addNewComment( post_id, new_comment );

    event.target.reset();
  }

  return (
    <form className={s.add_comment_form} onSubmit={commentFormSubmit}>
      <input type="text" placeholder='Enter your comment' name='comment'/>
      <button>New Comment</button>
    </form>
  )
}
