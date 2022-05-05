import { IoStarOutline, IoStarHalf, IoStar } from "react-icons/io5";

export function numToStar(num) {
  const stars = [];
  let index = 0;
  while (num >= 1) {
    stars.push(<IoStar key={index} />);
    num -= 1;
    index++;
  }
  if (num >= 0.5) {
    stars.push(<IoStarHalf key={index} />);
    index++;
  }
  while (stars.length < 5) {
    stars.push(<IoStarOutline key={index} />);
    index++;
  }
  return stars;
}
