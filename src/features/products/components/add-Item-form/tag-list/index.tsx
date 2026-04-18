import type { TagListProps } from '@/features/products/components/add-Item-form/tag-list/tagList.types';
import { IcClose } from '@/shared/assets/icons';

export function TagList({ tags, onRemoveTag }: TagListProps) {
  return (
    <ul className="mt-3.5 flex flex-wrap gap-3">
      {tags.map((tag) => (
        <li
          className="bg-secondary-100 typo-lg-regular text-secondary-800 inline-flex h-9 items-center justify-center gap-2 rounded-full px-4 select-none"
          key={tag}
        >
          #{tag}{' '}
          <button
            type="button"
            onClick={() => onRemoveTag(tag)}
            aria-label={`${tag} 태그 삭제`}
            className="flex cursor-pointer items-center justify-center"
          >
            <IcClose />
          </button>
        </li>
      ))}
    </ul>
  );
}
