import { useEffect } from "react";

function useCursor() {
  useEffect(() => {
    // Création du curseur
    const cursor = document.createElement("div");
    cursor.className =
      "fixed pointer-events-none z-50 w-6 h-6 bg-indigo-500 rounded-full opacity-75 transition-transform duration-100";
    document.body.appendChild(cursor);

    // Suivi de la souris
    const moveCursor = (e) => {
      cursor.style.left = `${e.clientX - 12}px`;
      cursor.style.top = `${e.clientY - 12}px`;
    };

    // Agrandir au survol
    const hoverCursor = () => {
      cursor.style.transform = "scale(1.5)";
    };
    const resetCursor = () => {
      cursor.style.transform = "scale(1)";
    };

    document.addEventListener("mousemove", moveCursor);

    // Ajouter listeners sur les éléments actuels et futurs
    const attachHover = (el) => {
      el.addEventListener("mouseenter", hoverCursor);
      el.addEventListener("mouseleave", resetCursor);
    };

    const hoverElements = document.querySelectorAll("a, button");
    hoverElements.forEach(attachHover);

    // Observer pour les nouveaux éléments ajoutés dynamiquement
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === 1 && (node.tagName === "A" || node.tagName === "BUTTON")) {
            attachHover(node);
          } else if (node.nodeType === 1) {
            node.querySelectorAll("a, button").forEach(attachHover);
          }
        });
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Nettoyage
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", hoverCursor);
        el.removeEventListener("mouseleave", resetCursor);
      });
      observer.disconnect();
      document.body.removeChild(cursor);
    };
  }, []);
}

export default useCursor;