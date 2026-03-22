import styles from './tag.module.css';
import Button from '@/components/Common/Button';
import DelTagImg from '@/assets/ic_X.svg';

export default function Tag({ value, index, onDelete }) {
  return (
    <div className={styles.tag}>
      # {value}
      <Button
        type="button"
        className="btnDelTag"
        value={index}
        onClick={() => onDelete(index)}
      >
        <img src={DelTagImg} alt="" />
      </Button>
    </div>
  );
}
