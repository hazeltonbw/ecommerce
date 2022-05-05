import { IoStarOutline, IoStarHalf, IoStar } from "react-icons/io5";

export function numToStar(num) {
  const stars = [];
  while (num >= 1) {
    stars.push(<IoStar />);
    num -= 1;
  }
  if (num >= 0.5) stars.push(<IoStarHalf />);
  while (stars.length < 5) stars.push(<IoStarOutline />);
  return stars;
}
