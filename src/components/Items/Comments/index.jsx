'use client';
import { useEffect, useState } from 'react';
import { getComments } from '@/apis/products';
import styles from './index.module.css';
import Textarea from '@/components/Common/Textarea';
import Button from '@/components/Common/Button';
import DropDown from '@/components/Common/DropDown';
import ProfileDefaultImg from '@/assets/ic_user_profile.svg';
import { formatRelativeTime } from '@/lib/formatDate.js';

const COMMENT_DROPDOWN = [
  { label: '수정하기', value: 'edit' },
  { label: '삭제하기', value: 'delete' },
];

function Comment({ id }) {
  const [commentAll, setCommentsAll] = useState({ list: [] });

  const [editingId, setEditingId] = useState(null);
  const [editValue, setEditValue] = useState('');

  const [commentValue, setCommentValue] = useState('');

  useEffect(() => {
    async function fetchComments() {
      const comments = await getComments(id);
      setCommentsAll(comments);
    }
    fetchComments();
  }, [id]);

  console.log('commentAll', commentAll);
  return (
    <div className={styles.commentContainer}>
      <form className={styles.addComment}>
        <p className={styles.label}>문의하기</p>
        <Textarea
          className="comment"
          name="comment"
          placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
          value={commentValue}
          onChange={(e) => setCommentValue(e.target.value)}
        />
        <div className={styles.btnWrap}>
          <Button className="btn primary btnS" disabled={!commentValue.trim()}>
            등록
          </Button>
        </div>
      </form>
      <div className={styles.commentWrap}>
        {commentAll.list.map((comment) => (
          <div key={comment.id} className={styles.comment}>
            <div className={styles.commentTop}>
              {editingId === comment.id ? (
                <div className={styles.editMode}>
                  <textarea
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                  />
                </div>
              ) : (
                <div className={styles.viewMode}>
                  <p className={styles.content}>{comment.content}</p>
                  <DropDown
                    options={COMMENT_DROPDOWN}
                    type="dropdown"
                    onChange={(option) => {
                      if (option.value === 'edit') {
                        setEditingId(comment.id);
                        setEditValue(comment.content);
                      }
                      if (option.value === 'delete') {
                        // 삭제 로직
                      }
                    }}
                  />
                </div>
              )}
            </div>
            <div className={styles.commentBottom}>
              <div className={styles.profileImg}>
                <img src={comment.writer.image || ProfileDefaultImg} />
              </div>
              <div className={styles.profileInfo}>
                <p className={styles.nickName}>{comment.writer.nickname}</p>
                <p className={styles.time}>
                  {formatRelativeTime(comment.createdAt)}
                </p>
              </div>
              {editingId === comment.id ? (
                <div className={styles.btnWrap}>
                  <Button
                    className="simple"
                    onClick={() => {
                      setEditingId(null);
                      setEditValue('');
                    }}
                  >
                    취소
                  </Button>

                  <Button
                    className="primary btnM"
                    onClick={() => {
                      console.log(editValue);
                      setEditingId(null);
                    }}
                  >
                    수정완료
                  </Button>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comment;
