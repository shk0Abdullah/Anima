"use client";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";
import gsap from "gsap";

gsap.registerPlugin(SplitText);

const links = ["How it Works", "Mission"];

export default function Nav() {
  const navRef = useRef<HTMLUListElement | null>(null);

  /* ---------- split once ---------- */
  useGSAP(() => {
    if (!navRef.current) return;
    navRef.current.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
      const split = new SplitText(a, { type: "chars" });
      (a as any)._chars = split.chars;
    });
  }, []);

  /* ---------- hover ---------- */
  const onEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!navRef.current) return;
    navRef.current.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
      const chars: HTMLElement[] = (a as any)._chars;
      const active = a === e.currentTarget;
      gsap.fromTo(
        chars,
        { y: -12, opacity: active ? 0 : 1 },
        {
          y: 0,
          opacity: active ? 1 : 0,
          duration: 0.35,
          stagger: 0.04,
          ease: "power2.out",
        }
      );
    });
  };

  const onLeave = () => {
    if (!navRef.current) return;
    navRef.current.querySelectorAll<HTMLAnchorElement>("a").forEach((a) => {
      const chars: HTMLElement[] = (a as any)._chars;
      gsap.to(chars, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.04,
        ease: "power2.out",
      });
    });
  };

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[20%] md:w-[20%] lg:w-[25%] flex justify-between items-center bg-white/10 backdrop-blur-md rounded-full shadow-lg z-20">
      <ul
        ref={navRef}
        className="flex gap-8 p-5 font-bold text-lg justify-center w-full"
      >
        {links.map((t) => (
          <li key={t} className="">
            <a
              onMouseEnter={onEnter}
              onMouseLeave={onLeave}
              className="cursor-pointer select-none"
            >
              {t}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
