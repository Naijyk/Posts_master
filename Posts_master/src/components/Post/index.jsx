import React from 'react';
import s from './index.module.css';
import { RxCross2 } from "react-icons/rx";
import CommentsBlock from '../CommentsBlock';

export default function Post({ id, title, description, like, comments, changeLike, deletePost, addNewComment, deleteComment }) {

  const like_text = like ? 'Liked' : 'Like?';

  const button_styles = {
    backgroundColor: like ? 'rgb(227, 38, 54)' : 'rgb(255, 255, 255)',
    color: like ? 'rgb(255, 255, 255)' : 'rgb(227, 38, 54)'
  }

  return (
    <div className={s.post}>
      <div style={button_styles} onClick={() => changeLike(id)} >
        { like_text }
      </div>
      <p>{ title }</p>
      <p>{ description }</p>
      <RxCross2 className={s.cross} onClick={() => deletePost(id)} />
      <CommentsBlock comments={comments}
                     post_id={id}
                     addNewComment={addNewComment}
                     deleteComment={deleteComment} />
    </div>
  )
}
