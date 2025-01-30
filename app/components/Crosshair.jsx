import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const lerp = (a, b, n) => (1 - n) * a + n * b;

const getMousePos = (e, container) => {
  if (container) {
    const bounds = container.getBoundingClientRect();
    return {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };
  }
  return { x: e.clientX, y: e.clientY };
};

const Crosshair = ({ color = "white", containerRef = null }) => {
  const cursorRef = useRef(null);
  const lineHorizontalRef = useRef(null);
  const lineVerticalRef = useRef(null);

  let mouse = { x: 0, y: 0 };

  useEffect(() => {
    const target = containerRef?.current || window;

    const handleMouseMove = (ev) => {
      mouse = getMousePos(ev, containerRef?.current);
      
      gsap.to([lineHorizontalRef.current, lineVerticalRef.current], {
        opacity: 1,
      });
    };

    const moveCrosshair = () => {
      gsap.to(lineVerticalRef.current, { x: mouse.x, duration: 0.1 });
      gsap.to(lineHorizontalRef.current, { y: mouse.y, duration: 0.1 });
      requestAnimationFrame(moveCrosshair);
    };

    requestAnimationFrame(moveCrosshair);

    // Handle hover on buttons
    const buttons = containerRef?.current
      ? containerRef.current.querySelectorAll("button")
      : document.querySelectorAll("button");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", (e) => {
        const rect = button.getBoundingClientRect();
        gsap.to(lineVerticalRef.current, { x: rect.left + rect.width / 2, duration: 0.3 });
        gsap.to(lineHorizontalRef.current, { y: rect.top + rect.height / 2, duration: 0.3 });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(lineVerticalRef.current, { x: mouse.x, duration: 0.3 });
        gsap.to(lineHorizontalRef.current, { y: mouse.y, duration: 0.3 });
      });
    });

    target.addEventListener("mousemove", handleMouseMove);

    return () => {
      target.removeEventListener("mousemove", handleMouseMove);
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", () => {});
        button.removeEventListener("mouseleave", () => {});
      });
    };
  }, [containerRef]);

  return (
    <div
      ref={cursorRef}
      className={`${
        containerRef ? "absolute" : "fixed"
      } top-0 left-0 w-full h-full pointer-events-none z-[10000]`}
    >
      <div
        ref={lineHorizontalRef}
        className="absolute w-full h-px pointer-events-none opacity-0"
        style={{ background: color }}
      ></div>
      <div
        ref={lineVerticalRef}
        className="absolute h-full w-px pointer-events-none opacity-0"
        style={{ background: color }}
      ></div>
    </div>
  );
};

export default Crosshair;
