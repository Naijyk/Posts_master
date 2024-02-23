import React from 'react';
import s from './index.module.css';

export default function Comment({ id, text, deleteComment, post_id }) {
  return (
    <div className={s.comment}
         onClick={() => deleteComment( id, post_id )} >
      { text }
    </div>
  )
}
