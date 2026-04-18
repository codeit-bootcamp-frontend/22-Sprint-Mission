import { TagList } from '@/features/products/components/add-Item-form/tag-list';
import { Input } from '@/shared/components/input';
import { useState, type KeyboardEvent } from 'react';

export function TagInputField() {
  const [tags, setTags] = useState<string[]>([]);
  const [tagError, setTagError] = useState('');

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    if (e.key === 'Enter') {
      setTagError('');
      e.preventDefault();

      const newTag = e.currentTarget.value.trim();

      if (!newTag) {
        setTagError('태그를 입력해주세요');
        e.currentTarget.value = '';
        return;
      }

      if (tags.includes(newTag)) {
        setTagError('이미 등록된 태그입니다');
        e.currentTarget.value = '';
        return;
      }

      if (tags.length >= 20) {
        setTagError('태그를 더 이상 추가할 수 없습니다');
        e.currentTarget.value = '';
        return;
      }

      setTags((prev) => [...prev, newTag]);
      e.currentTarget.value = '';
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags((prev) => prev.filter((prevTag) => prevTag !== tag));
  };

  return (
    <div>
      <Input
        label="태그"
        placeholder="태그를 입력해주세요"
        errorMessage={tagError || undefined}
        onKeyDown={handleKeyDown}
      />
      <TagList tags={tags} onRemoveTag={handleRemoveTag} />
    </div>
  );
}
