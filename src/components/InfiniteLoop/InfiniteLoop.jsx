import { React, useRef } from "react";
import "./infiniteloop.scss";
import { useEffect } from "react";
import { useState } from "react";

export default function InfiniteLoop({speed, direction, children}) {
  const outerRef = useRef(null);
  const innerRef = useRef(null);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const scrollers = outerRef.current;
    if (scrollers) {
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        addAnimation();
        setIsAnimated(true)
      }
    }
  }, []);

  const addAnimation = () => {
    const scrollers = outerRef.current;
    const scrollerInner = innerRef.current;
    if (scrollers) {
      scrollers.setAttribute("data-animated", true);
    }
    if (scrollerInner) {
      const scrollerContent = Array.from(scrollerInner.children)
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem)
      })
    }
  };

  return (
    <div className={`scroller max-w-[800px] ${isAnimated ? ' overflow-hidden' : ''}`} ref={outerRef}>
      <ul
        className={`tag-list scroller-inner m-0 list-none text-white flex gap-2 ${isAnimated ? ' flex-nowrap' : ''}`} ref={innerRef} style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}>
        {children}
      </ul>
    </div>
  );
}
