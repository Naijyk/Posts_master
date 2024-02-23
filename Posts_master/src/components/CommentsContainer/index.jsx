import React from 'react';
import Comment from '../Comment';


export default function CommentsContainer({ comments, deleteComment, post_id }) {

  return (
    <div>
      {
        comments.map(el => <Comment key={el.id}
                                        {...el}
                                        deleteComment={deleteComment}
                                        post_id={post_id} />)
      }
    </div>
  )
}
