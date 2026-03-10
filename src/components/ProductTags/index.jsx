import styles from './index.module.css';
import Input from '@/components/Common/Input';
import Tag from './Tag';
import { useState } from 'react';
import Modal from '@/components/Common/Modal';

export default function ProductTags() {
  const [tagInput, setTagInput] = useState('');
  const [tags, setTags] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleChange(e) {
    setTagInput(e.target.value);
  }
  function handleMakeTag(e) {
    if (e.key === ',') {
      e.preventDefault();
      const tagResult = e.target.value.trim();
      if (tags.includes(tagResult)) {
        setIsModalOpen(true);
      } else {
        setTags((prev) => [...prev, tagResult]);
        setTagInput('');
      }

      if (!tagResult) return;
    }
  }
  function handleDelete(index) {
    setTags((prev) => prev.filter((_, i) => i !== index));
  }
  function handleCloseModal() {
    setIsModalOpen(false);
  }
  return (
    <>
      {isModalOpen && (
        <Modal
          subText="이미 등록된 태그입니다."
          button="확인"
          onClose={handleCloseModal}
        />
      )}
      <Input
        type="text"
        id="productTag"
        className={styles.inputTag}
        placeholder="태그를 입력해주세요.(,쉼표로 구분할 수 있습니다.)"
        value={tagInput}
        onChange={handleChange}
        onKeyDown={handleMakeTag}
        maxlength={40}
      />
      <div className={styles.tagBox}>
        {tags.map((tag, index) => {
          {
            return (
              <Tag
                key={index}
                value={tag}
                index={index}
                onDelete={handleDelete}
              />
            );
          }
        })}
      </div>
    </>
  );
}
