"use client";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

export default function Preloader() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const split = new SplitText("#preloader-title", { type: "chars" });
    gsap.from(split.chars, {
      duration: 1,
      yPercent: 40,
      opacity: 0,
      ease: "expo.out",
      stagger: 0.05,
      onComplete: () => {
        gsap.to(el, {
          y: "-100vh",
          duration: 0.8,
          ease: "power3.inOut",
          onComplete: () => el.remove(),
        });
      },
    });
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#F1F2F2]"
    >
      <h1
        id="preloader-title"
        className="text-7xl font-bold tracking-wide text-center"
      >
        Welcome to&nbsp;
        <span className="text-[#050753]">ATS</span>
        <br />
        <span className="text-[#9e9e9e]">The Evaluator</span>
      </h1>
    </div>
  );
}
