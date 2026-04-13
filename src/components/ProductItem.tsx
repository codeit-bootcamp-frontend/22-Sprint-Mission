import placeholder from "../assets/placeholder.png";
import likeIcon from "../assets/ic_heart.svg";
import type { Item } from "../types/Product";

interface ItemProps {
  item: Item;
}

export default function ProductItem({ item }: ItemProps) {
  return (
    <li className="flex flex-col gap-4">
      <div className="rounded-2xl overflow-hidden">
        <img
          src={item.images[0] || placeholder}
          alt=""
          className="w-full aspect-square object-cover"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <h3>{item.name}</h3>
        <span className="font-bold">
          {new Intl.NumberFormat("ko-KR").format(item.price)}원
        </span>
        <span className="flex gap-0.5">
          <img src={likeIcon} />
          {item.favoriteCount}
        </span>
      </div>
    </li>
  );
}
