import { TagInputField } from '@/features/products/components/add-Item-form/tag-input-field';
import { useAddItemFrom } from '@/features/products/hooks/useAddItemForm';
import { Button } from '@/shared/components/button';
import { ImageUploader } from '@/shared/components/image-uploader';
import { Input } from '@/shared/components/input';

export function AddItemForm() {
  const { values, errors, handleChange, isFormVaild } = useAddItemFrom();

  return (
    <>
      <div className="mb-6 flex items-center justify-between">
        <h2 className="typo-xl-bold text-secondary-900">상품 등록하기</h2>
        <Button type="submit" size="small40" disabled={!isFormVaild}>
          등록
        </Button>
      </div>
      <form className="flex flex-col gap-8">
        <ImageUploader label="상품 이미지" />
        <Input
          label="상품명"
          placeholder="상품명을 입력해주세요"
          value={values.name}
          onChange={(e) => handleChange('name', e.target.value)}
          errorMessage={errors.name || undefined}
          required
        />
        <Input
          textarea
          rows={10}
          label="상품소개"
          placeholder="상품소개를 입력해주세요"
          value={values.description}
          onChange={(e) => handleChange('description', e.target.value)}
          errorMessage={errors.description || undefined}
          required
        />
        <Input
          label="판매가격"
          type="number"
          min="0"
          placeholder="판매 가격을 입력해주세요"
          value={values.price}
          onChange={(e) => handleChange('price', e.target.value)}
          errorMessage={errors.price || undefined}
          required
        />
        <TagInputField />
      </form>
    </>
  );
}
