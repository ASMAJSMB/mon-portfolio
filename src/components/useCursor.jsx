import { useEffect } from "react";

function useCursor() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "fixed pointer-events-none z-50 w-6 h-6 bg-indigo-500 rounded-full opacity-75 transition-transform duration-100";
    document.body.appendChild(cursor);

    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX - 12}px`;
      cursor.style.top = `${e.clientY - 12}px`;
    };

    const hoverCursor = () => {
      cursor.style.transform = "scale(1.5)";
    };

    const resetCursor = () => {
      cursor.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", hoverCursor);
      el.addEventListener("mouseleave", resetCursor);
    });

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);
}

export default useCursor;