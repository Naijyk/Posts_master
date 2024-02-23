import React from 'react';
import CommentsContainer from '../CommentsContainer';
import AddCommentForm from '../AddCommentForm';

export default function CommentsBlock({ comments, addNewComment, post_id, deleteComment }) {
  return (
    <div>
      <CommentsContainer comments={comments}
                         deleteComment={deleteComment}
                         post_id={post_id} />
      <AddCommentForm addNewComment={addNewComment}
                      post_id={post_id} />
    </div>
  )
}
