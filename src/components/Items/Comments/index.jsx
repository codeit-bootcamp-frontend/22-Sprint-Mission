'use client';
import { useEffect, useState } from 'react';
import { getComments } from '@/apis/products';
import styles from './index.module.css';

function Comment({ id }) {
  const [commentAll, setCommentsAll] = useState({ list: [] });

  useEffect(() => {
    async function fetchComments() {
      const comments = await getComments(id);
      setCommentsAll(comments);
    }
    fetchComments();
  }, [id]);

  return (
    <div className={styles.itemInfoWrap}>
      {commentAll.list.map((comment) => (
        <div key={comment.id}>{comment.content}</div>
      ))}
    </div>
  );
}

export default Comment;
