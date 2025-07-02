
import { useRef } from "react";

const useHorizontalScroll = () => {
  const scrollRef = useRef(null);

  const scroll = (direction, amount = 400) => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return { scrollRef, scroll };
};

export default useHorizontalScroll;
