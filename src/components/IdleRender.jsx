import { useEffect, useState } from "react";

function scheduleIdleCallback(callback) {
  if ("requestIdleCallback" in window) {
    const id = window.requestIdleCallback(callback, { timeout: 2000 });
    return () => window.cancelIdleCallback(id);
  }

  const timeoutId = window.setTimeout(callback, 300);
  return () => window.clearTimeout(timeoutId);
}

export default function IdleRender({ children, fallback = null }) {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    let cleanupIdle = null;

    const loadDeferredContent = () => {
      cleanupIdle = scheduleIdleCallback(() => {
        setShouldRender(true);
      });
    };

    if (document.readyState === "complete") {
      loadDeferredContent();
    } else {
      window.addEventListener("load", loadDeferredContent, { once: true });
    }

    return () => {
      window.removeEventListener("load", loadDeferredContent);
      if (cleanupIdle) {
        cleanupIdle();
      }
    };
  }, []);

  return shouldRender ? children : fallback;
}
